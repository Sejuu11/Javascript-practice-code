const user={                  // this keyword is used for current context
   // username:"sejal",
    price:300,

    welcomeMessage: function(){
      //  console.log(`${this.username} , welcome to website`); // for accesing variable in this object
     //   console.log(this)  // it will print both function access both
    }

}
//user.welcomeMessage()
//user.username="adi"
//user.welcomeMessage()
//console.log(this) // this is node environment it refers object

// in browser or google, there is window object
// in vscode ,there is a empty object

//function chai(){
   // let username="sejal"
   // console.log(this.username); // In the function this keyword is showing undefined
//}
//chai()

//const chai=function (){
//    let username="sejal"
//    console.log(this.username);
//}


//const chai= () => { // arrow function
//   let username="sejal"
   //console.log(this.username);  // by using arrow function it show undefined
//   console.log(this)   // it act as object
//}
//chai()

//const addTwo=(num1, num2) => {  // arrow function  or explicit return = using curly braces and return function

//   return num1 +num2
//} 
//console.log(addTwo(3,4))

//const addTwo=(num1, num2) => (num1+num2)  // implicit return = using paranthesis instead of curly braces
//console.log(addTwo(3,4))

const addTwo=(num1, num2) => ({username:"sejal"}) // object return , object always return in paranthesis
console.log(addTwo())

