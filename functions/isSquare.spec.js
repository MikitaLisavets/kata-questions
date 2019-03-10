import isSquare from './isSquare';

test('Basic tests', () => {
  expect(isSquare([1, 4, 9, 16, 25, 36])).toBe(true);
  expect(isSquare([1, 2, 3, 4, 5, 6])).toBe(false);
  expect(isSquare([])).toBe(undefined);
  expect(isSquare([1, 2, 4, 15])).toBe(false); 
});

test('Multidimensional tests', () => {
  expect(isSquare([1, 4, 9,[16,81,[85]], 54, 85])).toBe(false);
  expect(isSquare([1, [4], [9, 16, 25]])).toBe(true);
  expect(isSquare([1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]])).toBe(true);
  expect(isSquare([1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 111, [324, [361, 400]]]]]])).toBe(false);
  expect(isSquare([1, [], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]])).toBe(true);
  expect(isSquare([1, [4, [9, [16, [25, [36, [49, [64, [81, [100, [121, [144, [169, [196, [225, [256, [289, [324, [361, [400]]]]]]]]]]]]]]]]]]]])).toBe(true);
});