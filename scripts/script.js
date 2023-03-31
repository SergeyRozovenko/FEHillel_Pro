
const arr = [1,5,6,2,4];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
     const temp = arr[i];
   arr[i] = arr[arr.length - 1 - i];
   arr[arr.length - 1 - i] = temp;
 }

 console.log (arr, 'array reverse')