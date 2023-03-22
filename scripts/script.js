//--------------1.1

let userName1 = prompt("Please enter your name:") || "anonym";

alert(userName1);

//--------------1.2

const userName = prompt("Please enter your name") === "admin";
    alert (userName && "Hello admin" || 'Welcome');

//--------------2.1

let login = prompt("Please enter your login:");
let password = prompt("Please enter your password:");
let age = prompt("Please enter your age:");

(login && password) && alert("Welcome");
(login === '' || password === '') && alert("Login or password incorrect"); 

//--------------2.2

(login === '' && password === '') && alert("Login and password are required!"); 
(login === '' && password) && alert("Login required!"); 
(login && password === '') && alert("Password are required!"); 
(login && password) && alert("Welcome");

// //--------------2.3

alert((age >= 18 && age <= 28 && 'Hello') || 'Goodbay');