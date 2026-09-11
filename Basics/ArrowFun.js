const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

// in OR Imflicit Function

const add = (num1, num2) => num1 + num2

console.log(add(5,2))

// OR

const add_1 = (num1, num2) => (num1 + num2)
console.log(add_1(5,4))

//if you want to return object so you do in paranthesis

const addThree = (name) => ({username: "hitesh"})

console.log(addThree(4))