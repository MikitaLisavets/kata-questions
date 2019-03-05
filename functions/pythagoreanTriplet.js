export default function pythagoreanTriplet(n) {
  for(let a = 1; a <= n; a++) {
    for(let b = 1; b <= n; b++) {
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow((n / (a * b)), 2)) {
        return [a, b, Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))];
      }
    }
  }
}