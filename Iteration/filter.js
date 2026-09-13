const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter((num) => {
    return num > 4
})
console.log(newNums)

const num = [4,5,6,7,3,2,1,8];

num.forEach((num) => {
    if(num > 3){
        console.log(num)
    }
})


const nums = []

nums.forEach((num) => {
    if(num > 4){
        nums.push(num)
    }
})
console.log(newNums)