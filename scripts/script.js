//----Task 1

let a = [1,2,3,4,5]

document.write(a.join("_"));

//----------------Task 2

const arr = [6, 7, 2, 3, 5, 7];

document.write('<ul>');
for (let i = 0; i < arr.length; i++) {
  document.write('<li>' + arr[i] + '</li>');
}
document.write('</ul>');

//--------------Task 3

let arr_A = [1, 2, 3, 4, 5, 6];
let centerIndex = Math.floor(arr_A.length / 2);

if (arr.length % 2 === 0) {
 
  arr_A.splice(centerIndex - 1, 2); 
} else {
  
  arr_A.splice(centerIndex, 1);
}

console.log(arr_A); 

//--------------Task 4

let B = [1, 2, 3]; 
while (true) {
  let newElem = prompt("Введите новый элемент для массива (для выхода введите '&'): ");
  if (newElem === '&') {
    break; 
  }
  B.push(newElem); 
}
console.log("Массив A:", B); 
