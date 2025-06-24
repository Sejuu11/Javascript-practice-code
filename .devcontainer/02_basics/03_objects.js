//singleton= when we create a constructor itself it is a singleton 
//literal declaration is not a singleton
//Object.create// it is singleton

const symbol= Symbol("key1")


//object literals
const JsUser={
    name:"sejal" ,//declaration of object having key value pair
    "full name":"sejal kale",
    [symbol]:"mykey1",  // here it is act as a symbol
    symbol:"mykey1",   // all values in object are string 
    age: 21,
    location: "pune",
    email:"sejal11@gmail.com" ,
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[symbol])

JsUser.email="sejal@gmail.com"
//object.freeze(JsUser) // it permantly save the value 
//console.log(JsUser)

JsUser.greeting= function(){
    console.log("hello");
}
//console.log(JsUser.greeting);// it is take as a raference

JsUser.greetingTwo= function(){
    console.log(`hello, ${this.name}`); // reference of same object. take the reference of it
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());