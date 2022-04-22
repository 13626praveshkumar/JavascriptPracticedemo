let currentdate = new Date();
// console.log(currentdate)
let hour=currentdate.getHours();
let min=currentdate.getMinutes();
if(hour<10) hour='0'+hour
if(min<10) min='0'+min;

let month=currentdate.getMonth()+1;
let today=currentdate.getDate();
if(month<10) month='0'+month
if(today<10) today='0'+today
console.log(`${currentdate.getFullYear()}-${month}-${today} ${hour}:${min}`)