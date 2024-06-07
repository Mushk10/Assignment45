//       Making a Function
function make_shirt(size, message) {
    if (size === void 0) { size = "Medium"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(message, " prints on it"));
}
// Calling a function with by-default values
make_shirt();
//calling a function now with medium size and default message 
make_shirt("Large");
//calling a function now with small size and also different print message
make_shirt("Small", "I love to learn typescript");
