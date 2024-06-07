let current_users = ["Hafsa","mushk","Faheem","Ahmed","Haris"];

let new_user = ["Sabeen","Mushk","Nida","Nain","Zehra"];

// lop through new usersto check for username avalibility
new_user.forEach(new_one_user => {

    // making a condition for username already exist and save on our_condition variable
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print Different message using If-Else statements
    if(our_condition){
           console.log(`sorry ${new_one_user} is already taken`)
    }else{
        console.log(`this Username ${new_one_user} is avalible`)
    }
})