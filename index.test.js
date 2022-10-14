const { calculateTaxForBracket, calculateTax, calculateSuper } = require("./calculator");

test('Checks if the taxable amount returns correctly', () => {
  expect(calculateTaxForBracket(18201, 0)).toEqual(expect.any(Number));
  expect(calculateTaxForBracket(18201, 123)).toEqual(expect.any(Number));
  expect(calculateTaxForBracket(0, 123)).toEqual(expect.any(Number));
  expect(calculateTaxForBracket(0, 0)).toEqual(expect.any(Number));
});


test('Checks if the super is calculated correctly', () => {
    expect(calculateSuper(50000, 10.5)).toBe(5250);
    expect(calculateSuper(25000, 10.5)).toBe(2625);
    expect(calculateSuper(50000, 15)).toBe(7500);
    expect(calculateSuper(25000, 15)).toBe(3750);
    expect(calculateSuper(50000, 0)).toBe(0);
    expect(calculateSuper(0, 10.5)).toBe(0);
    expect(calculateSuper(0, 0)).toBe(0);
  });

test('Checks if Tax is calculated correctly between 0 - 18,200', () => {
    expect(calculateTax(0)).toBe(0);
    expect(calculateTax(18_000)).toBe(0);
    expect(calculateTax(18_200)).toBe(0);
});

test('Checks if Tax is calculated correctly between 18,201 - 37,000', () => {
    expect(calculateTax(18_201)).toBe(0.19);
    expect(calculateTax(18_202)).toBe(0.38);
    expect(calculateTax(35_000)).toBe(3192);
    expect(calculateTax(37_000)).toBe(3572);
});

test('Checks if Tax is calculated correctly between 37,001 - 90,000', () => {
    expect(calculateTax(37_001)).toBe(3572.33);
    expect(calculateTax(37_002)).toBe(3572.65);
    expect(calculateTax(75_000)).toBe(15922);
    expect(calculateTax(90_000)).toBe(20797);
});

test('Checks if Tax is calculated correctly between 90,001 - 180,000', () => {
    expect(calculateTax(90_001)).toBe(20797.37);
    expect(calculateTax(90_002)).toBe(20797.74);
    expect(calculateTax(150_000)).toBe(42997);
    expect(calculateTax(180_000)).toBe(54097);
});

test('Checks if Tax is calculated correctly 180,001 and Over', () => {
    expect(calculateTax(180_001)).toBe(54097.45);
    expect(calculateTax(180_002)).toBe(54097.9);
    expect(calculateTax(250_000)).toBe(85597);
});