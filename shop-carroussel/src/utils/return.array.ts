export function getArray(arr: Array<any>) {
  const inter = arr.map((item, ind, array) => {
    return item;
  });
  return inter;
}
