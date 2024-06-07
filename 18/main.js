var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its original order
var countriestovisit = ["China", "America", "Canada", "Dubai"];
console.log("Original order:", countriestovisit);
// Print a array in alphabetical order without modifing the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriestovisit, true).sort());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriestovisit);
//print the arrat in reverse order without modifing the actual array list
console.log("Reverse Order:", __spreadArray([], countriestovisit, true).reverse());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriestovisit);
// we have changed the original array order now
console.log("Original Array Reversed:", countriestovisit.reverse());
// print the array to show that its a original order
console.log("Back to Original Order:", countriestovisit.reverse());
// print the array to show that its order has been changed in alphabetical order
console.log("sorted in alphabetical order:", countriestovisit.sort());
// we have changed the original array order now in reverse order again
console.log("Original Array Reversed again:", countriestovisit.reverse());
