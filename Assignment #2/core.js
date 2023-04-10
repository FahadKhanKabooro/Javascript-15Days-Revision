//Functions 

// function greet(students){ // <= PArametter
//     console.log("Hello " + students)
// }
// greet("Fahad") <= Arguments
// greet("Haseeb") <= Arguments
// greet("FaRaz") <= Arguments

// function employe(fileNo){
//     // console.log("Working on File No: " + fileNo)
//     return "Working on File No: " + fileNo;
// }
// let data = employe(144);
// console.log(data)

// function add(num1 , num2){
//     return num1 + num2

// }
// let data = add(5 , 7);
// console.log(data)

// Recursion 

// function writeData(data , times){
//     document.write(data);
//     if(times > 0){
//         writeData(data , times -1)
//     }
// }
// writeData("This is Not Fair", 2)

// function writeKaro(work, times){
//     document.write(work);
//     if(times > 0){
//         writeKaro(work, times -1)
//     }
// }
// writeKaro("Halaat Thai! ", 3)

// function factorial(num){
// if(num > 1 ){
// return num * factorial(num - 1);
// }
// return 1
// }

// console.log(factorial(7))

// function Factorial(num){
//     if(num > 1){
//         return num * Factorial(num - 1)
//     }
//     return 1
// }
// console.log(Factorial(5))


//Closures

// let abc = 7;
// function print(){
//     let def = 14;
//     console.log(abc);
//     return function (){
//         console.log(def)
//     }
// }
// let innerFunction = print()

// function print(num1){
//     return function(num2){
//         console.log(num1 + num2);

//     }
// }
// let firstFunction = print(1);
// let secondFunction = print(2);
// firstFunction(1)
// secondFunction(1)

// function first(a){
//     return function second(b){
//         console.log(a + b);

//     }
// }
// let up = first(10);
// let down = first(10);
// up(1)
// down(2)

// function add(num1){
//     return function(num2){
//         console.log(num1 + num2)
//     }
// }
// let firstFunction =add(5);
// let secondFunction =add(6);
// firstFunction(10)
// // secondFunction(10)

// let array = [1,2,3,4,5,6,7,8,9,10];
// let user = +prompt("Enter a number between 1 and 10");
// function searchArray(array , user){
//     if(array.length === 0){
//         return false;
//     } else if(array[0] === user){
//         return true;
//     }
// }

// let result = searchArray();
// console.log(result);

let arr = [1,2,3,4,5];
let val = 3;
function search(arr,val){
  if(arr === val){
    console.log(true)
  } else{ console.log(false)}
}

search(arr,val);
