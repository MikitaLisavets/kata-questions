import pythagoreanTriplet from './pythagoreanTriplet';

test('Basic tests', () => {
  expect(pythagoreanTriplet(60)).toEqual([3, 4, 5]);
  expect(pythagoreanTriplet(780)).toEqual([5, 12, 13]);
  expect(pythagoreanTriplet(2040)).toEqual([8, 15, 17]);
});