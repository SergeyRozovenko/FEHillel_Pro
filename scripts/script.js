//---------------------TASK 1


function average(nums) {
	let sum = 0;
	let count = 0;
  
	for (let i = 0; i < nums.length; i++) {
	  if (typeof nums[i] === 'number') {
		sum += nums[i];
		count++;
	  }
	}
  
	return sum / count;
  }

let nums = [1, 'hello', 2, true, 3, null, 4];
let result = average(nums);
console.log(result);


//---------------------TASK 2

function doMath(x, znak, y) {
	let result;
	switch (znak) {
	  case '+':
		result = x + y;
		break;
	  case '-':
		result = x - y;
		break;
	  case '*':
		result = x * y;
		break;
	  case '/':
		result = x / y;
		break;
	  case '%':
		result = x % y;
		break;
	  case '^':
		result = 1;
		for (let i = 0; i < y; i++) {
		  result *= x;
		}
		break;
	  default:
		result = "Невідомий знак операції";
		break;
	}
	return result;
  }
  
let x = Number(prompt("Введіть число x:"));
let y = Number(prompt("Введіть число y:"));
let znak = prompt("Введіть знак математичної операції (+, -, *, /, %, ^):");

let result = doMath(x, znak, y);


console.log("Результат: " + result);

//--------------------TASK 3

function fillArray(rows, cols) {
	const arr = [];
  
	for (let i = 0; i < rows; i++) {
	  const row = [];
	  for (let j = 0; j < cols; j++) {
		const value = prompt(`Введіть значення для елементу [${i}][${j}]:`);
		row.push(value);
	  }
	  arr.push(row);
	}
  
	return arr;
  }

const rows = prompt("Введіть кількість рядків:");
const cols = prompt("Введіть кількість стовпців:");

const arr = fillArray(rows, cols);

console.log(arr);

//--------------------TASK 4

function removeChars(str, charsToRemove) {
	let newStr = "";
  
	for (let i = 0; i < str.length; i++) {
	  if (!charsToRemove.includes(str[i])) {
		newStr += str[i];
	  }
	}
  
	return newStr;
  }

let str = " hello world";
let charsToRemove = ['l', 'd'];

let result = removeChars(str, charsToRemove);
console.log(result);
