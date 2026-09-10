const user = {
    username: "hitesh",
    Price: 122
}

function handleObject(anyObject){
    console.log(`username ${anyObject.username} and price is ${anyObject.Price}`)
}
handleObject(user)

handleObject ({
    username: "harsh",
    Price: 1223
})

const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));