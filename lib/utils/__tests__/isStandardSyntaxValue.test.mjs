import isStandardSyntaxValue from '../isStandardSyntaxValue.js';

describe('isStandardSyntaxValue', () => {
	it('keyword', () => {
		expect(isStandardSyntaxValue('initial')).toBeTruthy();
	});
	it('svg keyword', () => {
		expect(isStandardSyntaxValue('currentColor')).toBeTruthy();
	});
	it('dimension', () => {
		expect(isStandardSyntaxValue('10px')).toBeTruthy();
	});
	it('angle', () => {
		expect(isStandardSyntaxValue('45deg')).toBeTruthy();
	});
	it('scss var', () => {
		expect(isStandardSyntaxValue('$sass-variable')).toBeFalsy();
	});
	it('scss namespace', () => {
		expect(isStandardSyntaxValue('namespace.$sass-variable')).toBeFalsy();
	});
	it('negative scss var', () => {
		expect(isStandardSyntaxValue('-$sass-variable')).toBeFalsy();
	});
	it('positive scss var', () => {
		expect(isStandardSyntaxValue('+$sass-variable')).toBeFalsy();
	});
	it('less var', () => {
		expect(isStandardSyntaxValue('@less-variable')).toBeFalsy();
	});
	it('negative less var', () => {
		expect(isStandardSyntaxValue('-@less-variable')).toBeFalsy();
	});
	it('scss interpolation', () => {
		expect(isStandardSyntaxValue('#{$var}')).toBeFalsy();
	});
	it('negative scss interpolation', () => {
		expect(isStandardSyntaxValue('-#{$var}')).toBeFalsy();
	});
	it('less interpolation', () => {
		expect(isStandardSyntaxValue('@{var}')).toBeFalsy();
	});
	it('WebExtension replacement keyword', () => {
		expect(isStandardSyntaxValue('__MSG_@@bidi_dir__')).toBeFalsy();
	});
	it('negative WebExtension replacement keyword', () => {
		expect(isStandardSyntaxValue('__msg_@@bidi_dir__')).toBeTruthy();
	});
});
