// var message = "yaw ko na hirap";
// console.log(message);

// let greeting = "Happy Birth Day";
// console.log(greeting);


// const PI = 3.14;
// console.log(PI);

// var age = 22;
// console.log(age);

// let massage = "Hello My World";
// let age = 10;
// let isBoolean = true;


//------Simple Declaring Object in JS ----------
// let person = {
//     name:"Francis",
//     age:22,
//     gender:"Male",
// };

// console.log(person);


//---------simple array in JS-------------------

// let fruits =["Apple", "Orange", "Durian"];

// console.log(fruits[1]);


//--------------Ternary Operator---------------//

// let loveisessential = false;
// let transaction = loveisessential ? true : "You need to have rational thinking";
// console.log(transaction);

// Assume the student's mark is stored in the variable 'mark'



// let mark=90;


// if (mark >= 90) {
//   console.log("Grade: A");
// } else if (mark >= 80) {
//   console.log("Grade: B");
// } else if (mark >= 70) {
//   console.log("Grade: C");
// } else if (mark >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// console.log(mark);

// let grade = 50;


// const finalMark = grade >= 90 ? "A" : grade >= 80 ? "B" :grade >= 70 ? "C" : "F";  

// console.log(finalMark);

// ----------- Destructuring --------


// const objects = ["speaker","cp","paper","pc"];
// const [speaker, cp, paper, pc] = objects;

// console.log(speaker, cp, paper, pc);



// const person ={
//     name: "Francis Oliver D. Hiloma",
//     age: 22,
//     dob: new Date(),
//     status: "single",
// };

// const {name, age, dob, status} = person;

// console.log(name, age, dob, status);


//Spread Operator

// const body = ["Head","Body"];
// const completebody = ["Toes","shoulder", ...body];

// console.log(completebody);


// const person = {
//     name: "Kali D",
//     age: 21,
// };

// const contactperson = {
//     ...person,
//     address: "Lleano Caloocan city",
    
// };

// console.log(contactperson);


// const numbers = [1, 2, 3];

// function sum(a, b, c){
//     return a + b + c;
// }

// console.log(sum(...numbers));

// --------------------Array Methods--------------//

//push method

// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('mango');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']

// pop method
// let fruits = ['apple', 'banana', 'orange'];
// let lastFruit = fruits.pop();
// console.log(lastFruit); // Output: 'orange'
// console.log(fruits); // Output: ['apple', 'banana']

//splice method
// let fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 1, 'mango');
// console.log(fruits); // Output: ['apple', 'mango', 'orange']
 

//----------------Array Iterators-----------//

// let students = [
// {

// id: 1,
// f_name: "Alex",
// l_name: "Bautista",
// gender: "Male",
// married: false,
// age: 40,
// paid: 0,
// courses:["Javascript", "React"],

// },



// {
// id: 2,
// f_name: "Robert",
// l_name: "Baho",
// gender: "Male",
// married: true,
// age: 32,
// paid: 150,
// courses:["Javascript", "PWA"],

// },

// {
//     id: 3,
// f_name: "Rubi",
// l_name: "Bayot",
// gender: "Female",
// married: false,
// age: 40,
// paid: 350,
// courses:["Blogging", "React", "UX"],

//  },
// ];

//------Array iterator map method---------

// students.map((student, index) => {
//     console.log(index,students)

// })

// const newStudents = students.map((student, index) => {
//     return student;

// })

// console.log(newStudents);


//------Array iterator filter method---------

// const newStudents = students.filter((student, index) => student.paid);

// console.log(newStudents);

//------Array iterator some method---------

// const hasBelow30 = students.some((student, index) => student.age < 30 );
// console.log(hasBelow30);

//------Array iterator find method---------

// let studentAbove30 = students.find((student, index) => student.age >30);
// console.log(studentAbove30);

//------Array iterator reduce method---------


// let totalCost = students.reduce((accumulator, student, currentIndex, students) =>{
//     accumulator = accumulator + student.paid;
//     return accumulator;
// },
// 0
// );

// console.log(totalCost);

//-----------Promises---------------//


//---Pending
//---Resolve
//---Reject

// let promise = new Promise((resolve, reject) => {
//     const i = "Promise";
//     i === "Promis" ? resolve() : reject();
// });

// promise
// .then(()=> console.log("Promise was resolved"))
// .catch(()=> console.log("Promise is rejected"));


//-----Fetch API--------------//

// import fetch from "node-fetch";

// const url = "https://jsonplaceholder.typicode.com/posts/1";

// const fetchPromise = fetch(url);

// fetchPromise
// .then((response) => response.json())
// .then((response) => console.log(response));


//-------Async & Await------//


// import fetch from "node-fetch";

// const url = "https://jsonplaceholder.typicode.com/posts/1";


// const fetchPromise = async () => {
//     const res = await fetch(url);
//     const response = await res.json();
//     console.log(response);
// };

// fetchPromise();

//----- Javascript Module------//


import {name, age} from "./person.js"

console.log(name, age);


 