function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Mujtuba", "Aman", "Harry Poter"];
var copy_magician_names = magician_names.slice();
var copy_great_magician = make_great(copy_magician_names);
console.log("Original Array\n");
show_magician(magician_names);
console.log("\ncopied Array\n");
show_magician(copy_great_magician);
