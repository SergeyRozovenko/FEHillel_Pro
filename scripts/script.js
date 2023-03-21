
let student1 =  prompt("Введите возраст первого студента") + ' років' +
                  prompt("Введите имя первого студента")  + ' ' +
                  prompt("Введите фамилию первого студента");
                   
let student2 =  prompt("Введите возраст второго студента") + ' років' + 
                  prompt("Введите имя второго студента")  + ' ' +
                  prompt("Введите фамилию второго студента");

let student3 =  prompt("Введите возраст третьего студента") + ' років'  +
                  prompt("Введите имя третьего студента") + ' ' +
                  prompt("Введите фамилию третьего студента");

const space = '\n' + '\n';

const averageAge = ((parseInt(student1) + parseInt(student2) + parseInt(student3)) / 3);

console.log('**************' ,space,
'Список студентів, що зареєструвалися на вебінар :',space, 
'1.' ,student1, space,
'2.' ,student2, space,
'3.' ,student3, space,
'--------------' ,space,
'Середній вік студента :',averageAge, space,
'--------------' ,space,
'**************' );