//array
const myArr=[0,1,2,3,4,5];
console.log(myArr[4]);
const myArr2= new Array(1,2,3,4,5);

//array methods
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)// value add at start
console.log(myArr);
myArr.shift()// remove the unshift element
console.log(myArr);
console.log(myArr.includes(9))

const newArr= myArr.join();
console.log(myArr)
console.log(newArr)
console.log(typeof newArr);

//slice,splice 
// slice print all element from array 

console.log("A",myArr);// all array are print
const myn1= myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);// all array are print
const myn2= myArr.splice(1,3);// including 3 in it 
console.log("C",myArr);// except the range(1,3) all element are print
console.log(myn2);
