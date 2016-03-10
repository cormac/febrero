var expect = require('chai').expect;
var numeralConverter = require('../numeral');

describe('NumeralConverter', () => {
  it('return 1 for I', () => {
    expect(numeralConverter('I')).to.equal(1);
  });

  it('return 5 for V', () => {
    expect(numeralConverter('V')).to.equal(5);
  });

  it('return 6 for VI', () => {
    expect(numeralConverter('VI')).to.equal(6);
  });

  it('return 4 for IV', () => {
    expect(numeralConverter('IV')).to.equal(4);
  });

  it('return 7 for VII', () => {
    expect(numeralConverter('VII')).to.equal(7);
  });

  it('return 12 for XII', () => {
    expect(numeralConverter('XII')).to.equal(12);
  });

  it('return 14 for XIV', () => {
    expect(numeralConverter('XIV')).to.equal(14);
  });

  it('returns 2016 for MMXVI', () => {
    expect(numeralConverter('MMXVI')).to.equal(2016);
  });

});
