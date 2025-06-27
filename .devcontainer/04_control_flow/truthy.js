//truethy and falsy
//const useremail ="sejalgmail.com"
//if(useremail){           // it not compare then it will diplay true
//    console.log("got email");  
//}else{
//    console.log('donot got');
//}

//falsy value= 0,-0, BigInt 0n, null , undefined, NaN,false
//truthy value= "0", "false",[],"",{}, function(){}

const useremail=[]       //array
if(useremail.lenght===0){
    console.log("array is empty");
}
const emptyObj={}  //object
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//false==0 =>true
//false=="" => true
//0=="" => true

// nullish coalescing operator(??):null undefined

let val1;
//val1=5 ?? 10
//val1= null ?? 10
val1= undefined ?? 15

console.log(val1);

// terniary operator 
//condition ? true: false

const iceTeaPrice =100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")