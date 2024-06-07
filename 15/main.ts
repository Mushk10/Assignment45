let guestlist = ["Hafsa","Mushk","zehra","nida"];

let donotCome = guestlist[3];

console.log(donotCome, "Not come");
//splice is used to removed the value and also add avalue
guestlist.splice(3, 3,"Nain");

guestlist.forEach(guest => console.log(`asslam o walikum ${guest}, would you like to Dinner with me ?`));