//Exercise 15
var guests = ["Aiman", "Amna", "Shafaq"];
var cannotMakeDinner = "Shafaq";
//new guest
var newGuest = "Abeesha";
//replace
var newMember = guests.indexOf(cannotMakeDinner);
//Exercise 16 Start
console.log("I found a bigger dinner table So I invited more guests.");
//more new guest
var newGuestBeginning = "Usman";
guests.unshift(newGuestBeginning);
//middle
var newGuestMiddle = "Vijesh";
var middleGuest = (guests.length / 2);
guests.splice(middleGuest, 0, newGuestMiddle);
//end 
var newGuestEnd = "Ali";
guests.push(newGuestEnd);
//print message
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], ", you are invited to my place for dinner."));
}
