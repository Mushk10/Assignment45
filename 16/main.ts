//creating a guest list array
let guestlist = ["Hafsa","Mushk","zehra","nida"];

//making variable for those guest who cant come
let donotCome = guestlist[3];

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
let middleIndex: number = Math.floor(guestlist.length / 2);

//adding a new guest to iddle index of array
guestlist.splice(middleIndex, 0, "Ali jee");

//print message of updated list
console.log ("Updated list of our Guest");

//sending a invitation message to our guest one by one with their names
guestlist.forEach(oneguest => console.log(`Asslam o Walium ${oneguest}, Would you like to Dinner with me ?`));