import zeros from './zeros';

test('Basic tests', () => {
  expect(zeros(0)).toBe(0);
  expect(zeros(6)).toBe(1);
  expect(zeros(30)).toBe(7);
});

test('Random tests', () => {
  function zerosSol(n) {
    let count = 0;
    let x = 5;
    while (x <= n) {
      count += ~~(n/x);
      x *= 5;
    }
    return count;
  }

  for (let i = 0; i < 100; i++) {
    let n = Math.floor(Math.random() * 1000000000);
    expect(zeros(n)).toBe(zerosSol(n));
  }  
});