let age1, age2, age3;
let firstName1, firstName2, firstName3;
let lastName1, lastName2, lastName3;

// Отримання віку та імен користувачів
age1 = prompt("Введіть вік першого студента:");
firstName1 = prompt("Введіть ім'я першого студента:");
lastName1 = prompt("Введіть прізвище першого студента:");

age2 = prompt("Введіть вік другого студента:");
firstName2 = prompt("Введіть ім'я другого студента:");
lastName2 = prompt("Введіть прізвище другого студента:");

age3 = prompt("Введіть вік третього студента:");
firstName3 = prompt("Введіть ім'я третього студента:");
lastName3 = prompt("Введіть прізвище третього студента:");

space = '\n' + '\n';

// Обчислення середнього віку
const averageAge = (parseInt(age1) + parseInt(age2) + parseInt(age3)) / 3;

console.log('**************' ,space,
'Список студентів, що зареєструвалися на вебінар :',space, 
'1.',age1,'років', firstName1, lastName1,space,
'2. ' ,age2,'років', firstName2, lastName2, space,
'3. ' ,age3,'років', firstName3, lastName3, space,
'--------------' ,space,
'Середній вік студента :',averageAge, space,
'--------------' ,space,
'**************' );