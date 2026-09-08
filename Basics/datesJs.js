let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate)


let myCreatedDate = new Date(2026, 0, 8)
console.log(myCreatedDate.toDateString())

let myCreatedDate_1 = new Date(2026, 0, 8,5,3)
console.log(myCreatedDate_1.toLocaleString())

let myCreatedDate_2 = new Date("2026-01-14")
console.log(myCreatedDate_2.toLocaleString())

let myCreatedDate_3 = new Date("09-08-2026")
console.log(myCreatedDate_3.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate_3.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

 