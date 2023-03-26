//----------------- Task 1

let result = "";
for (let i = 10; i <= 20; i++) {
   result += i
    if (i < 20) {
        result += ", ";
    }
}
document.write(result);

//----------------- Task 2

for (let i = 10; i <= 20; i++) {
        document.write(i + '<sup>2</sup> = ' + i * i + ', ');
 }

 //----------------- Task 3

for (let i = 1; i <= 9; i++) {
    let result = i * 7;
    document.write("7 * " + i + " = " + result + "</br>");
}

 //----------------- Task 4

 let sum = 0;

 for (let i = 1; i <= 15; i++) {
   sum += i;
 }
 
 document.write("Сума всіх цілих чисел від 1 до 15: " + sum);

 //----------------- Task 5

 let sum = 1;

 for (let i = 15; i <= 35; i++) {
   sum *= i;
 }
 
 document.write("Добуток всіх цілих чисел від 15 до 35: " + sum);

 //----------------- Task 6

  let sum = 0;

 for (let i = 1; i <= 500; i++) {
   sum += i/500;
 }
 
 document.write("середнє арифметичне всіх цілих чисел від 1 до 500: " + sum);

  //----------------- Task 7

let sum = 0;

 for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        sum += i;
    }
 }
 document.write("суму лише парних чисел в діапазоні від 30 до 80: " + sum);
 
  //----------------- Task 8


let number = '';
 for (let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
    number += i + ',';
    
    }
 }
  document.write("Вивести всі числа в діапазоні від 100 до 200 кратні 3: " + number);

  //----------------- Task 9

  let num = prompt("Введіть натуральне число:");
  let count = 0;
  let sum = 0;
  let validRange = !isNaN(num)

if(validRange) {

for (var i = 1; i <= num; i++) {
  if (num % i === 0) {  
    document.write( i + ',');    
    if (i % 2 === 0) {  
      count++;          
      sum += i;         
    }
  }
} 

document.write("<br>"+"Кількість парних дільників: " + count);
document.write("<br>"+"Сума парних дільників: " + sum);

} else { 
    document.write ("Input WRONG");
}

//----------------- Task 10

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const result = i * j;
      document.write(i + "*" + j + "=" + result + "<br>");
    }
  }