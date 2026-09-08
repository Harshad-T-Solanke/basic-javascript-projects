const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "hero"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[2])


// Array Methods

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


