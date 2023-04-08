// 1. Write a Javascript program that accepts two numbers in two prompt
// and display the larger one in the console.
// let user1 = +prompt("Enter any Number ");
// let user2 = +prompt("Enter any Number ");
// if(user1 > user2){
//     console.log("User1 is Greater  " + user1);
// }else{
//     console.log("User2 is Greter  " + user2);
// }

// 2. Write a JavaScript conditional statement to find the 
//sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// let user = +prompt("Enter any Number");
// if(user > 0){
//     console.log('The sign is + ');
// } else if(user < 0){
//     console.log('the sign is - ');
// }
// else{
//     console.log('the sign is +');
// }

// 3. Write a JavaScript program that accepts five numbers in 
// five prompts and
// displays the larger one in the console

// let user1 = +prompt("Enter any Number ");
// let user2 = +prompt("Enter any Number ");
// let user3 = +prompt("Enter any Number ");
// let user4 = +prompt("Enter any Number ");
// let user5 = +prompt("Enter any Number ");

// if(user1 > user2 && user1 > user3 && user1 > user4 && user1 > user5){
//     console.log(user1 + "  is Greater Number");
// }else if(user2 > user1 && user2 > user3 && user2 > user4 && user2 > user5){
//     console.log(user2 + "  is Greater Number");
// }else if(user3 > user1 && user3 > user2 && user3 > user4 && user3 > user5){
//     console.log(user3 + "  is Greater Number");
// }else if(user4 > user1 && user4 > user3 && user4 > user2 && user4 > user5){
//     console.log(user4 + "  is Greater Number");
// }else if(user5 > user1 && user5 > user3 && user5 > user4 && user5 > user2){
//     console.log(user5 + "  is Greater Number");
// }

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(i = 0; i <= 15; i++){
//      if(i % 2 ==0){
//         console.log(i + ' is Even');
//     }else{
//         console.log(i + ' is Odd');
//     }
// }

// 4. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :

// let totalMarks = +prompt(' Enter your total marks ');
// let percentage =  totalMarks / 500* 100;
// if(percentage >= 90 && percentage <= 100){
//     console.log('Total Marks ' + totalMarks + ' Grade A')
// } else if(percentage >= 80 && percentage <= 90){
//     console.log('Total Marks ' + totalMarks + ' Grade B')
// }else if(percentage >= 60 && percentage <= 70){
//     console.log('Total Marks ' + totalMarks + ' Grade c')
// }else if(percentage >= 50 && percentage <= 60){
//     console.log('Total Marks ' + totalMarks + ' Grade D')
// }else if(percentage >= 40 && percentage <= 50){
//     console.log('Total Marks ' + totalMarks + ' Grade F')
// }else{
//     console.log('TRy Again Next Year')
// }

// 5. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for(i = 0;i <=100;i++){
//     console.log(i)
//     if(i % 3==0 && i % 5==0){
//         console.log('FizzBuzz');
//     }else if(i % 3==0){
//         console.log('Fizz');
//     }else if(i % 5==0){
//         console.log('Buzz');
//     }
// }

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 0;i<=5;i++){
    for(let j = 0;j <=i;j++){
        document.write("*");
    }document.write("</br>");
}
