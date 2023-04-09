// OBJECTS

// let person = {
// name: 'Fahad',
// cnic: 4120214595143,
// eyesColor: 'brown',
// canSpeakEnglish: true,
// speak: function(sentance){
// console.log(sentance + this.name);
// }
// };

// let person2 = { // Person 2 => Object
//     name: 'HAseeb', // name : 'HAseeb => Property
//     cnic: 4120214595143, // cnic: is a Key
//     eyesColor: 'black', // black is a value
//     canSpeakEnglish: true,
//     speak: function(sentance){ // Mathod or function 
//     console.log(sentance + this.name);
//     }
//     };


// person2.speak('HEllo Every ONe i am ');
// console.log(person2.eyesColor);
// let student1 = {
//     name: 'Haseeb',
//     rollNo: 420,
//     teacher: 'Qari saab',
//     className: 'Javascript'
// };
let previousStudents = localStorage.getItem("students")
let students = previousStudents ? JSON.parse(previousStudents) : [];
function provideStudents(){
    let std = {
        name: prompt("Enter Name "),
            rollNo: +prompt("Roll Number"),
            teacher: prompt("Enter Teachers Name "),
            className: prompt("Class Name")
}
students.push(std);



console.log(students)
let stringify = JSON.stringify(students)
localStorage.setItem("students", stringify)
};
// localStorage.setItem(students)



