function one(){
    const username = "harsh"

    function two(){
        const website = "Protfolio"
        console.log(username)
    }
    two()
}
one() 

if(true){
    const username = "harsh"
    if(username == "harsh"){
        const website = " Portfolio"
        console.log(username + website) // harsh Portfolio
    }
    // console.log(website) // error: website not defined
}
// console.log(username) // error: username is not defined


const user = {
    username: "harsh",
    price: 999,

welcomeMessage: function() {
    
    console.log(`${this.username}, welcome to website`);
}
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();

 