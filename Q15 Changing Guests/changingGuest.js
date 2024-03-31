var guests = ["Aiman", "Amna", "Shafaq"];
var cannotMakeDinner = "Shafaq";
//new guest
var newGuest = "Abeesha";
//replace
var newMember = guests.indexOf(cannotMakeDinner);
if (newMember !== -1) {
    guests[newMember] = newGuest;
}
//new invititation
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], " you are invited at my place for dinner."));
}
