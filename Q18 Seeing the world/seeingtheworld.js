var favPlaces = ["Saudia Arabia", "Turkey", "Egypt", "Maldives", "Qatar"];
//Original Array
console.log("Original Order:", favPlaces);
// Alphabetical Order
console.log("Alphabetical Order:", favPlaces.sort());
//Checking 
console.log("Checking Array is still in its original order:", favPlaces);
//Reverse Order
console.log("Reverse Alphabetical Order:", favPlaces.sort().reverse());
// Again Checking
console.log("Checking Array that it is still in its original order after reversing:", favPlaces);
//Reverse
favPlaces.reverse();
console.log("Reversed:", favPlaces);
//Agan Reverse
favPlaces.reverse();
console.log("Again reversed:", favPlaces);
//Sorting in alphabetical order
favPlaces.sort();
console.log("Sorted in alphabetical order:", favPlaces);
//Sorting in reverse alphabetical order
favPlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reversed Alphabetical Order Sorted:", favPlaces);
