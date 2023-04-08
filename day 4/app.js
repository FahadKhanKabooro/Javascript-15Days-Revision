// Functions
// alert( is a built-in Function)
 // Greet => custom function

// function greet(student){ parameters
//     console.log("Hello" + student)
// }

// greet("haseeb") // arguments
// greet("zafar")
// greet("fahad")

// function employee(fileNo){
//     return "Working on file No: " + fileNo 
// }

// let data = employee(7);
// console.log(data);

// function add(num1 , num2){
//     return num1 + num2
// }

// let data = add(5,7);
// console.log(data);
// document.write(data)

//      Recursion
// function writeData(data, times){
//     document.write(data)
//     if(times > 0){
//         writeData(data, times -1)
//     }
// }

// writeData("Hello",5)

// function factorial(num){
// if (num > 1){
// return num * factorial(num -1)
// }
// return 1
// }

// console.log(factorial(7))


//          Clousers = scopes
// parent scope or global sope => whole file 
//function scope or child scope => inside function

// let abc = 7; //global scope
// function print(def){
//     // let def = 14; //local scope or child scope
    
//     return function (ghi){ 
//         console.log(def + ghi);
//     }
// }

// let innerFunction = print(7);
// let innerFunction2 = print(8);
// innerFunction(2);
// innerFunction2(3);

// function saveUrl(url){
//     return function(){
//         fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
//     }
// }
// let callUrl = saveUrl("https://jsonplaceholder.typicode.com/todos");
// callUrl();