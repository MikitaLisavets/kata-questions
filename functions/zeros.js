export default function zeros(n) {
  let result = 0;
  for (let k = 1; k < (Math.log(n) / Math.log(5)); k++) {
    result += Math.floor(n / Math.pow(5, k));
  }
  return result;
}