import intersection from './intersection';

test('Basic tests', () => {
  expect(intersection([1, 2, 3, 4], [3, 4])).toEqual([3, 4]);
  expect(intersection([1, 2], [3, 4, 5, 6])).toEqual([]);
  expect(intersection(null, [])).toEqual([]);
  expect(intersection([], null)).toEqual([]);
  expect(intersection()).toEqual([]);
});