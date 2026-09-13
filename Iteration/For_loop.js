
for(let i=1; i<=5; i++){
    const element = i;
    console.log(i)
}

for(let i=0; i<=10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element)
}

// 1 To 10 Table Printing

for(let i = 1; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
      console.log(i + '*' + j + ' = ' + i*j);
    }
}

 let myArray = ["flash", "batman","superman"]
console.log("  ");
console.log(myArray.length)
 for(let i=0; i<myArray.length; i++){
    const element = myArray[i];
    console.log(element);
 }

 // break and continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        break;
    }
    console.log(i)
}
console.log(" ")
for(let i=1; i<=20; i++){
    if(i == 5){
        console.log("value 5 is detected ");
        continue;
    }
    console.log(`value i value is ${i}`);
}