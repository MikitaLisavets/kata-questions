export default function isSquare(arr) {
  if (!arr.length) return;

  return arr.every((element) => {
    if (Array.isArray(element)) {
      if (!element.length) return true;
      return isSquare(element);
    } else {
      return Math.sqrt(element) % 1 == 0;
    }
  });
}