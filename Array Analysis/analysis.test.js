const analysis = require('./analysis');

it('works', () => {
  expect(1).toBe(1);
});

it('average (Example 1)', () => {
  expect(analysis.average([1, 8, 3, 4, 2, 6])).toBe(4);
});

it('average (Example 2)', () => {
  expect(analysis.average([2, 4, 6])).toBe(4);
});

it('min (Example 1)', () => {
  expect(analysis.min([2, 4, 6])).toBe(2);
});

it('min (Example 2)', () => {
  expect(analysis.min([1, 5, 9, 4, 6])).toBe(1);
});

it('min (Example 1)', () => {
  expect(analysis.max([2, 4, 6])).toBe(6);
});

it('min (Example 2)', () => {
  expect(analysis.max([1, 5, 9, 4, 6])).toBe(9);
});

it('length (Example 1)', () => {
  expect(analysis.length([1, 5, 9, 4, 6])).toBe(5);
});

it('length (Example 2)', () => {
  expect(analysis.length([9, 4, 6])).toBe(3);
});