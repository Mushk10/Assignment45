function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}

let magician_names = ["Mujtuba","Aman","Harry Poter"];

let great_magicians = make_great(magician_names);

show_magician(great_magicians)