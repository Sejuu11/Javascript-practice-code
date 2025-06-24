// singlton objects- object are declared by using constructor

const tinderUser= new Object() // singleton object
//const tinderUser={}// declaration of object // non- singlton object
//console.log(tinderUser);// object access, declaration of object

tinderUser.id="12344"
tinderUser.name="sejal"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:"sejal@gmail.com",
    fullname:{
        Userfullname:{
            firstname:"sejal",
            lastname:"kale",
        }
    }
}
//console.log(regularUser.fullname.Userfullname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3= {obj1,obj2}
//const obj3=Object.assign(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2);// it is static method that copy all variables, assign the object
const obj3={...obj1,...obj2}// spreading of object
//console.log(obj3);

//console.log(tinderUser)
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));// making each key value pair as a seprate array
//console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check whether this property is present or not


//destructuring of object
const course={
    coursename:"Online",
    price:"999",
    courseInstructor:"sejal",
}
console.log(course.price);//we can access like this also

const {courseInstructor}= course
console.log(courseInstructor);// we can access like this method

const {courseInstructor:instructor}= course  //destructuring of object
console.log(instructor);

//json in API
{
    "name":"sejal",
    "coursename":"javascript", // all key and values pair are string
}