//let a=10
//const b=20
//var c=30
//console.log(a)
//console.log(b)
//console.log(c)

{} // when it is come with object , function then it is called as scope

//var c=300 // global scope
let a=300
if(true){             // block scope
    let a=10          // block scope having value 10
    const b=20
    var c=30
//  console.log("inner:",a); //having value 10

}
//console.log(a)  // having value 300
//console.log(b)
//console.log(c)

//nested scope
function one(){
    const username="sejal"
    function two(){
        const website="youtube"
    //   console.log(username)
    }
    //console.log(website);
    two()
}
one()

if(true){
    const username="sejal"
    if(username=="sejal"){
        const website="youtube"
    //    console.log(username+website)
    }
    //console.log(website); // it cannot be access it has scope still if condition
}
//console.log(username);

// example
console.log(addone(5))
function addone(num){
    return num+1
}
//addone(5) // only return the value , not print the value
//console.log(addone(5))

addTwo(5)                   // we cannot access the function before initailization
const addTwo=function(num){
    return num+2
}
//addTwo(5)
