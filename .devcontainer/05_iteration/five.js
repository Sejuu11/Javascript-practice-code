//for each loop

const coding=["js","py","c++","java"]
coding.forEach( function name(item){
    console.log(item);
})

//coding.forEach( (item)=>{   //arrow function
//    console.log(item);
//})

function printme(item){   // reference of item 
    console.log(item);
}
coding.forEach(printme);

//coding.forEach(item,index,arr) => {
//    console.log(item,index,arr);
//}

const MyCoding=[

    {
        langaugeName:"javascript",
        langaugeFileName:"js"
    },

    {
        langaugeName:"java",
        langaugeFileName:"java"
    },

    {
        langaugeName:"Python",
        langaugeFileName:"py"
    },

]
MyCoding.forEach((item) => {
    console.log(item.langaugeName);
} )