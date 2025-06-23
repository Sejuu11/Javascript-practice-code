const name="sejal"
const repocount=1
//console.log(name+repocount+ " value");

//another syntax of string (string interpullation)
console.log(`helo my name is ${name} and my repo countis ${repocount}`);

const gamename= new String ("Aditya-sejal")
console.log(gamename[0]);

console.log(gamename.__proto__);// to get object of string
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));// character at 2nd position
console.log(gamename.indexOf('t'));
const newString= gamename.substring(0,4);
console.log(newString);// to get substring from string

const anotherString= gamename.slice(-5,3)
console.log(anotherString);

const newString1=" sejal "
console.log(newString1);
console.log(newString1.trim());//remove the starting space and ending space

const url="https://sejal.com/sejal%20kale"
console.log(url.replace('%20','-'));// used to replace the value
console.log(url.includes('sejal'));
console.log(gamename.split('-'));// used to split string in form of array

