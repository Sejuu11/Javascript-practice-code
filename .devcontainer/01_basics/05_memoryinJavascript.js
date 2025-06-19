let instaname="sejal@gmail"
let anothername="aditya@gmail"
anothername="ajay@gmail"
console.log(instaname); // original value
console.log(anothername);// updated value
// copy of original value we get
let userOne={
    email:"user@gmail.com",
    upi:"user@ybl",
}
let userTwo= userOne
userTwo.email= "sejal@gmail.com"

console.log(userOne.email);// value in both are same 
console.log(userTwo.email);// because they are taken as a refernce 
// act as a object (refernce value)