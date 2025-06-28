const myNums=[1,2,3]
//const myTotal=myNums.reduce(function (acc, currval){      // syntax of reduce function
//    console.log(`acc:${acc} and currval : ${currval}`);
//    return acc + currval
//},0)                     // accumulator 1st value is 0
//console.log(myTotal);

//by using arrow function

const myTotal = myNums.reduce ((acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:999
    },

    {
        itemName:"py course",
        price:1000
    },

    {
        itemName:"java course", 
        price:1200
    },
]
const priceToPay=shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);