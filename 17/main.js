//creating a guest list array
var guestlist = ["Hafsa", "Mushk", "zehra", "nida"];
//making variable for those guest who cant come
var donotCome = guestlist[3];
//printing the the name of guest who cant come
console.log(donotCome, "not come");
//add or remove values from guest list array
guestlist.splice(3, 1, "Nain");
//message print for bigger table
console.log("Good News ! We have found a bigger table for Dinner");
//adding a new value at starting index of array
guestlist.unshift("Faheem");
//adding a new guest at ending index of array
guestlist.push("shehreyar");
//get a middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 2);
//adding a new guest to iddle index of array
guestlist.splice(middleIndex, 0, "Ali jee");
//print message of updated list
console.log("Updated list of our Guest");
//sending a invitation message to our guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Asslam o Walium ".concat(oneguest, ", Would you like to Dinner with me ?")); });
//inform that only 2 guest can be invited foe dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guest to dinner with me");
//using while loop to remove guests from the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log(" Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("invitation to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("empty list:", guestlist);
