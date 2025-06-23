const score=400
//console.log(score)
const balance= new Number(100)
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));// after 100 point of 2 zeros are added in it

const othernumber= 123.895
//console.log(othernumber.toPrecision(3))// precision means approximate value of digit 3 after 3 point
const hundreds=1000000
//console.log(hundreds.toLocaleString('en-IN'));

//maths
console.log(Math);
console.log(Math.abs(-4));//absolute value (-)value is become +
console.log(Math.round(4.6));// around 4 is 5
console.log(Math.ceil(4.3));// greater than 4 is 5
console.log(Math.floor(4.9));// choose the lower value 
console.log(Math.min(4,3,6,7));
console.log(Math.max(4,3,6,7));
console.log(Math.random());// always values are in between 0-1
console.log(Math.random()*10);
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);// if random value is 0.11 then its floor is 0, for this we added 1 in it ,so it will become 1

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);

