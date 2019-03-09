import rot13 from './rot13';

test('Basic tests', () => {
  expect(rot13('test')).toBe('grfg');
  expect(rot13('Test')).toBe('Grfg');
  expect(rot13('Codewars')).toBe('Pbqrjnef');
  expect(rot13('Ruby is cool!')).toBe('Ehol vf pbby!');
  expect(rot13('10+2 is twelve.')).toBe('10+2 vf gjryir.');
  expect(rot13('abcdefghijklmnopqrstuvwxyz')).toBe('nopqrstuvwxyzabcdefghijklm');
});