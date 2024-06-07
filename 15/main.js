var guestlist = ["Hafsa", "Mushk", "zehra", "nida"];
var donotCome = guestlist[3];
console.log(donotCome, "Not come");
//splice is used to removed the value and also add avalue
guestlist.splice(3, 3, "Nain");
guestlist.forEach(function (guest) { return console.log("asslam o walikum ".concat(guest, ", would you like to Dinner with me ?")); });
