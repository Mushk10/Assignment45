var current_users = ["Hafsa", "mushk", "Faheem", "Ahmed", "Haris"];
var new_user = ["Sabeen", "Mushk", "Nida", "Nain", "Zehra"];
// lop through new usersto check for username avalibility
new_user.forEach(function (new_one_user) {
    // making a condition for username already exist and save on our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different message using If-Else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this Username ".concat(new_one_user, " is avalible"));
    }
});
