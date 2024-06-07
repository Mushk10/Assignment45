// Making a array of countries and print its original order
let countriestovisit: string[] = ["China","America","Canada","Dubai"];
console.log("Original order:", countriestovisit);

// Print a array in alphabetical order without modifing the actual array list
console.log("Alphabetical Order:", [...countriestovisit].sort());

// Show that the array is still in its Original order
console.log("Still in Original Order:",countriestovisit);

//print the arrat in reverse order without modifing the actual array list
console.log("Reverse Order:", [...countriestovisit].reverse());

// Show that the array is still in its Original order
console.log("Still in Original Order:",countriestovisit);

// we have changed the original array order now
console.log("Original Array Reversed:", countriestovisit.reverse());

// print the array to show that its a original order
console.log("Back to Original Order:", countriestovisit.reverse());

// print the array to show that its order has been changed in alphabetical order
console.log("sorted in alphabetical order:", countriestovisit.sort());

// we have changed the original array order now in reverse order again
console.log("Original Array Reversed again:", countriestovisit.reverse());