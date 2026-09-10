// 1]
function sayMyName(){
    console.log("h")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")
}
sayMyName();

// 2]
function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

addTwoNumbers(2,5)

//  3]
function addNum(num1, num2){
    return num1 + num2
}

const result = addNum(4,5)
console.log("Result: ", result)

// 4]

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username } just logged in`
}
console.log(loginUserMessage('harsh'))


// #rest Operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,3000,400)) // 200,3000,400


function calculateCartPrice1(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice1(200,3000,400,500,600))