// for of loop

//array specific loop
const arr=[1,2,3,4,5,6];

for (const num of arr) {
    console.log(num);
}

const greeting ="hello world"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

//Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France");

console.log(map);

for (const [key, value] of map) {
    console.log(key,'->', value);
}

