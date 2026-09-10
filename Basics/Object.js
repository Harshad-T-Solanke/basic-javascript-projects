
const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Harshad solanke",
    [mySym]: "mykey1",
    age: 18,
    location: "beed",
    email: "harshad@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(mySym)
console.log(jsUser[mySym])

jsUser.email = "abc@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "harsh@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User  ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


