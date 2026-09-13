// for of loop

// 1> Array

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
}

// 2> String

const greetings = "Hello world!"
for(const greet of greetings){
    if(greet === " "){
        continue;
    }
    console.log(`Each char is ${greet}`);
}


// Maps

console.log(" ")
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr',"France")

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value)
}

// Object for for-IN loop 

// for-IN loop

console.log(" ")

const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    rb: 'rubby',
    swift: "swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

console.log(" ")
const programmin = ['js','rb','py','java','cpp'];

for(const key in programmin){
    console.log(programmin[key])
}