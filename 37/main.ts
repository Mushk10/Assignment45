//       Making a Function
function make_shirt (size: string = "Medium" ,message:string = "I Love Typescript" ){
    console.log(`Creating a ${size} shirt with the ${message} prints on it`)
}

// Calling a function with by-default values
make_shirt();

//calling a function now with medium size and default message 
make_shirt("Large")

//calling a function now with small size and also different print message
make_shirt("Small","I love to learn typescript")