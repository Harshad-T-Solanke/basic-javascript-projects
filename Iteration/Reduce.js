 const myNums = [1,2,3]

let myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
 }, 0)
 console.log(myTotal)

//  Using arrow function =>

 myTotal = myNums.reduce( (acc, currval) => acc+currval, 2)

 console.log(myTotal)


 const shoppingCart = [
    {
        itemName: "js course",
        price: 9999
    },
    {
        itemName: "das course",
        price: 9339
    },
    {
        itemName: "HTML course",
        price: 9009
    },
    {
        itemName: "web course",
        price: 99991
    },
    {
        itemName: "Mern Stack course",
        price: 9909
    },
 ]

 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 console.log(priceToPay)