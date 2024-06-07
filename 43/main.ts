function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}

let magician_names = ["Mujtuba","Aman","Harry Poter"];

let copy_magician_names = magician_names.slice()

let copy_great_magician = make_great(copy_magician_names);

console.log("Original Array\n")
show_magician(magician_names);

console.log("\ncopied Array\n")
show_magician(copy_great_magician);