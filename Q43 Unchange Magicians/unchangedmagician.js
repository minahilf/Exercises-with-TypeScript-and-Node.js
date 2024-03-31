function makeGreat(magicians) {
    return magicians.map(function (magician) { return "Great " + magician; });
}
function showMagicians(magicians) {
    console.log(magicians.join(', '));
}
var originalMagicians = ["Dai Vernon", "Harry Houdini", "David Blaine"];
var greatMagiciansArray = makeGreat(originalMagicians);
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagiciansArray);
