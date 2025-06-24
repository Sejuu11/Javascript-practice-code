const  marvel_heros=["thor","ironman","spiderman"]
const dc_heros= ["superman","flash","batman"]
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros);
//console.log(allHeros);
const all_new_heros=[...marvel_heros,...dc_heros]// spread oprator used in array to add one or more array instad of concatenate
console.log(all_new_heros);

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)// adding all element in single array
console.log(real_another_array);

console.log(Array.isArray("sejal"))// asking is this array
console.log(Array.from("sejal"))// used to make it array
console.log(Array.from({name:"sejal"}))//it gives empty array {}=object because we have to give it array key

let score1=100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3));// .of operator is used to make array of multiple input