export default function intersection(arr1, arr2) {
  if (!arr1 || !arr2) return [];
  const [minArr, maxArr] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
  return minArr.filter(elem => maxArr.includes(elem));
}