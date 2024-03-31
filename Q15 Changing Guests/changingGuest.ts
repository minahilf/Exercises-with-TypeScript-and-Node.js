let guests: String[] = ["Aiman", "Amna", "Shafaq"];
let cannotMakeDinner:String = "Shafaq";
//new guest
let newGuest: String = "Abeesha";
//replace
let newMember:number = guests.indexOf(cannotMakeDinner);
if(newMember !== -1){
    guests[newMember] = newGuest;
}
//new invititation
for(let i = 0; i<guests.length; i++){
    console.log(`Hello ${guests[i]} you are invited at my place for dinner.`)
}