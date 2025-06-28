//for


//for (let index = 0; index < 10; index++) {
//    const element = index;
//    console.log(element);
//}

//for (let index = 0; index < 10; index++) {
//    const element = index;
//    if(element==5){
//        console.log("5 is best no")
//    }
//    console.log(element);
//}

//for (let i = 0; i < 10; i++) {
//    console.log(`outer loop values : ${i}`);
//    for (let j = 0; j < 10; j++) {
//        console.log(`Inner loop value ${j} and inner loop ${i}`);
        
 //   }
    
//}

// break , continue

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("detected 5");
        break;
    }
    console.log(`Value of index is ${index}`);
    
}

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("detected 5");
        continue;
    }
    console.log(`Value of index is ${index}`);
    
}


