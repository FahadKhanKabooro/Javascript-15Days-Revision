//DATE

// const date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());


// const doomsDay = new Date();

// doomsDay.setDate(15);
// doomsDay.setMonth(5);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(22);


// const date = new Date();
// let diff = doomsDay.getTime() - date.getTime();
// console.log((diff /(1000 * 60 * 60*24 * 365.25)).toFixed(1))
// console.log(date.getTime(),doomsDay.getTime());

let hourElem = document.getElementById("Hours");
let minElem = document.getElementById("Mins");
let secElem = document.getElementById("Secs");

setInterval(function(){
    const date = new Date();
    hourElem.innerText= date.getHours();
    minElem.innerText= date.getMinutes();
    secElem.innerText= date.getSeconds();

}, 1000);

