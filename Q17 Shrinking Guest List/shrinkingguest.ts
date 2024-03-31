// Exercise 16
let guests: string[] = ["Usman", "Aiman", "Vijesh", "Amna", "Shafaq", "Ali"];
//console.log(`I found a bigger dinner table So I invited more guests.`);

// Print messages
for (let i = 0; i < guests.length; i++) {
    // console.log(`Hello ${guests[i]}, you are invited to my place for dinner.`);
}

// Exercise 17
console.log(`I am sorry to say that, but the new dinner table won't arrive in time, and I can only invite two people for dinner.`);

// Remove guests
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`I'm so sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print messages to the two people still on the list
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, You are still invited to my place for dinner.`);
}

// Print the remaining guests at the end
console.log(`Guests who are still coming:`, guests);
