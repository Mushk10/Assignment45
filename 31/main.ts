let userName = ["Hafsa","Mushk","Faheem","Ahmed","Admin"];

userName = []

if(userName.length === 0){
    console.log("your Array is empty We need to find some users ! ")
}else{
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`);
    }
})

}