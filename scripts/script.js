const arr = [1,2,3,4,5,6,7];

for (let i = 0; i < arr.length - 1; i += 2) {
  console.log (i);
  const temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}

console.log (arr);
