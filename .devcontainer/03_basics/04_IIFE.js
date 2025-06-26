// Immediately Invoked Function Expression(IIFE)

//function myName(){
//   console.log("DB connected")
//}
//myName()

(function myName(){
    console.log(`DB connected`);  // function is write in paranthesis
})();  // we have to give semicolon for ending the code

// ()= function defination , ()= function call/function execution

( () => {
    console.log(`DB connected two`)
})(); // if we write 2 IIFE then we should give ; afetr the completion of code

( (name) => {
    console.log(`DB connected two ${name}`)
})("sejal")