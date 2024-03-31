//1. Tests for equality and inequality with strings
var myFatherName = "Aamir";
console.log("Is myFatherName == `Aamir`?");
if (myFatherName == "Aamir") {
    console.log("True");
}
else {
    console.log("False");
}
//2.  Tests using the lower case function
var myNameInLowerCase = "minahil";
console.log("Is myNameInLowerCase == `MINAHIL`?");
console.log(myNameInLowerCase == "MINAHIL");
//3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 6;
var num2 = 8;
// ==
console.log("Is num1 == num2?");
if (num1 == num2) {
    console.log("True");
}
else {
    console.log("False");
}
// !==
console.log("Is num1 !== num2?");
console.log(num1 !== num2);
//< or >
console.log("Is num1 > num2?");
if (num1 > num2) {
    console.log("true");
}
console.log("False");
console.log("Is num1 < num2?");
if (num1 < num2) {
    console.log("false");
}
// <= or =>
console.log("Is num2 <= num1?");
console.log(num2 <= num1);
console.log("Is num2 >= num1 ?");
console.log(num2 >= num1);
//4. Tests using "and" and "or" operators
var myName = "Minahil";
var myAge = 20;
// AND
console.log("Is my name Minahil and my age 20?");
console.log(myName == "Minahil" && myAge == 20);
//OR
console.log("Is my name Minahil and my age 25?");
console.log(myName == "Minahil" || myAge == 25);
//5. Test whether an item is in a array
var guests = ["Abeesha", "Amna", "Shiza", "Laiba", "Huma", "Shafaq"];
if (guests.includes("Shafaq")) {
    console.log("Yes '".concat("Shafaq", "' is in the array "));
}
//6.  Test whether an item is not in a array
if (guests.includes('Wanya')) {
    console.log("".concat("Wanya", " is not in the array"));
}
else {
    console.log("No, ".concat('Wanya', " is not in the array."));
}
