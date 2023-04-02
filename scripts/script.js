const rows = 4;
const columns = 5;

const arr = new Array (rows);

for (let i = 0; i < rows; i++) {
  arr[i] = [];

  for(let j = 0; j < columns; j++) {
    arr[i][j] = Math.floor(Math.random() * 10);
  }
}

let maxSum;
let maxSumColumn;

let minSum;
let minSumColumn;


for (let j = 0; j < columns; j++) {
  let colSum = 0;
  for (let i = 0; i < rows; i++) {
    colSum += arr[i][j];
  }


if (j === 0) {
  maxSum = colSum;
  maxSumColumn = j;

  minSum = colSum;
  minSumColumn = j;

  continue;

}

if (colSum < minSum) {
  minSum = colSum;
  minSumColumn = j;
}

  if (colSum > maxSum) {
    maxSum = colSum;
    maxSumColumn = j;
  }
 
}
console.log(arr);
console.log('Стовпець з мінімальною сумою елементів' + ' ' + minSumColumn + ',' + 'сума :' + minSum);
console.log('Стовпець з максимальною сумою елементів' + ' ' + maxSumColumn + ',' + 'сума :' + maxSum);

// console.log(`Стовпець з мінімальною сумою елементів:' + minSumColumn + , 'сума:' minSum);

// console.log(`Стовпець з максимальною сумою елементів:' + maxSumColumn, 'сума:' + maxSum);


