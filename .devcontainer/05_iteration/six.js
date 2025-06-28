//const coding=["js","py","c++","java"]

//const values=coding.forEach((item) => {   //for each loop does not return value
//console.log(item);
//return item
//})
//console.log(values);

//const myNums=[1,2,3,4,5,6]
//const newNums = myNums.filter( (num) => num>4)   // filter is used for return the value but we have to give the condition
//console.log(newNums);

const myNums=[1,2,3,4,5,6]
const newNums = myNums.filter( (num) =>{   // when we use scope{} in arrow function we have to use return in it
   return  num>4
})  
console.log(newNums);
