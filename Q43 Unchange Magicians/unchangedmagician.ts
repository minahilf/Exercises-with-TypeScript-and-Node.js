function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => "Great " + magician);
}

function showMagicians(magicians: string[]): void {
    console.log(magicians.join(', '));
}
let originalMagicians: string[] = ["Dai Vernon", "Harry Houdini", "David Blaine"];
const greatMagiciansArray: string[] = makeGreat(originalMagicians);
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagiciansArray);