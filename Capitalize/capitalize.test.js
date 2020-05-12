// capitalize(string) takes a string and returns that string with the first character capitalized.

import capitalize from './capitalize';

it('happy path (Example 1)', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('happy path (Example 2)', () => {
  expect(capitalize('goodbye')).toBe('Goodbye');
});
