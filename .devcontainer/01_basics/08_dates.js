let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//let myCreateDate= new Date(2023,0,23)// 0 declare 1st month
//console.log(myCreateDate.toDateString());

//let myCreateDate= new Date(2023,0,23,5,7);
//console.log(myCreateDate.toLocaleString());
//let myCreateDate= new Date("2025-01-11");
//console.log(myCreateDate.toLocaleString())

//time
let myTimeStamp=Date.now();
//console.log(myTimeStamp);//times in milisecond
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));// giving the current date, converted in seconds
let newdate= new Date();
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getMonth())
console.log(newdate.getTime());
