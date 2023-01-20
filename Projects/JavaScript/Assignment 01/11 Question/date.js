let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let date1 = date.getDate();
let day = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds =date.getTime()/1000; //January 1, 1970 is called as epoch date so time is directly calculated based on that

console.log(`The year is ${year}`);
console.log(`The month is ${month+1}`); //Adding +1 since the default value for January is 0
console.log(`The date is ${date1}`);
console.log(`The day is ${day+1}`); //Adding +1 since the default value for Sunday is 0
console.log(`The hour is ${hour}`);
console.log(`The minutes is ${minutes}`);
console.log(`The seconds elapse since January 1, 1970 is ${Math.round(seconds)}`); 