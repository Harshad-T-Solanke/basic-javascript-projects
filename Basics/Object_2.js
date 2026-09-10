// Object Part 2

// const tinderUser = new Object()
const tinderUser = {}
console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname:{
            firstname: "Harsh",
            lastname: "solanke"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userFullname)
console.log(regularUser.fullname.userFullname.firstname)
console.log(regularUser.fullname.userFullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3)

const obj4 = Object.assign(obj1, obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)


const user = [
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:2,
        email: "abc1@gmail.com"
    },
    {
        id:3,
        email: "abc2@gmail.com"
    },
    {
        id:4,
        email: "abc3@gmail.com"
    },
]

console.log(user[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))