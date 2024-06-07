let username =["Hafsa","Mushk","Faheem","Ahmed","Admin"];

username.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`);
    }
})