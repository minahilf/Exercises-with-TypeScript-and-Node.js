//Exercise 15
let guests: String[] = ["Aiman", "Amna", "Shafaq"];
let cannotMakeDinner:String = "Shafaq";
//new guest
let newGuest: String = "Abeesha";
//replace
let newMember:number = guests.indexOf(cannotMakeDinner);
//Exercise 16 Start
console.log(`I found a bigger dinner table So I invited more guests.`);
//more new guest
let newGuestBeginning: String = "Usman";
guests.unshift(newGuestBeginning);
//middle
let newGuestMiddle: String = "Vijesh";
let middleGuest: number = (guests.length/2);
guests.splice(middleGuest,0, newGuestMiddle);
//end 
let newGuestEnd: String = "Ali";
guests.push(newGuestEnd);
//print message
for(let i = 0; i < guests.length; i++){
    console.log(`Hello ${guests[i]}, you are invited to my place for dinner.`);
}