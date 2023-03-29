let arr_A = [];

arr_A.length = 15;

for (i = 0; i < arr_A.length; i++) {
  arr_A[i] = Math.floor(Math.random() * 10)

  if (i % 2 !== 0) {
    arr_A[i] = 0
  }
}

console.log(arr_A);