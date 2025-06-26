//function myName(){
 //   console.log("s");
//    console.log("e");
  //  console.log("j");
   // console.log("a");
   // console.log("l");
//}
//myName() //accessing the function

//function addTwoNumbers(number1, number2){ //function defination(parameteres)
//    console.log(number1+number2);
//}
//addTwoNumbers(3,4); // when we call function (arguments)

function addTwoNumbers(number1, number2){ 
    //let result=number1 + number2
    //return result
    return number1+number2

}
const result =addTwoNumbers(3,5)
//console.log("result:", result);

function loginUser(username){
    return `${username} just logged In`
}
//console.log(loginUser("sejal"))
//console.log(loginUser()) // when not passing the value it will print= undefined just logged in

function calculateCartPrice(...num1){ // adding multiple parameter as using rest opearator
    return num1
}
//console.log(calculateCartPrice(200,400,500)) //it will added dierctly in array

function calculateCartPrice(val1,val2,...num1){ 
    return num1
}
//console.log(calculateCartPrice(200,400,500)) // 200 in val1, 400 in val2 onlt 500 is added in array

const user ={
    username:"sejal",
    price:199,
}
function handleObjcet(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
//handleObjcet(user)
handleObjcet({
    username:"Aditya",
    price:399,
})

const newArray=[200,300,400,500]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(newArray))