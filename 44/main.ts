function makingSandwich(...itmes: string[]){
    console.log("Making a Sandwich with the following items: \n");
    
    itmes.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich\n")
}

// calling the function 3 times with a different number of arguments
makingSandwich("chicken","cheese","mayo");

makingSandwich("Beef","cheese","ketchup");

makingSandwich("Egg","chicken","Mayo","ketchup","Cucamber","Maggi Masala");