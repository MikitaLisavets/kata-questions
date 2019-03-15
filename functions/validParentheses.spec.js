import validParentheses from './validParentheses';

test('Basic tests', () => {
  expect(validParentheses('()')).toBe(true);
  expect(validParentheses('())')).toBe(false);
  expect(validParentheses('()()((()')).toBe(false);
  expect(validParentheses('()')).toBe(true);
  expect(validParentheses('()()')).toBe(true);
  expect(validParentheses('(())')).toBe(true);
  expect(validParentheses(')')).toBe(false);
  expect(validParentheses('')).toBe(true);
  expect(validParentheses('())')).toBe(false);
  expect(validParentheses('((((()))))')).toBe(true);
  expect(validParentheses('()))')).toBe(false);
  expect(validParentheses('()()()())')).toBe(false);
  expect(validParentheses('(()()()())(())')).toBe(true);
  expect(validParentheses('((((((((')).toBe(false);
  expect(validParentheses('(())((()((()))))')).toBe(true);
  expect(validParentheses('())(')).toBe(false);
  expect(validParentheses(')()()()(')).toBe(false);
  expect(validParentheses('(()()))(')).toBe(false);
  expect(validParentheses(')()(')).toBe(false);
});