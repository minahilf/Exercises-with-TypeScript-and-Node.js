let currentUsers:String[] = ["Minahilf", "haniyakh4", "Kinza99", "AliKhan23", "UsmanR22"];
let newUsers:String[] = ["haniyakh4", "kiran42", "Minahilf", "humakhan2", "hamzasaif2"];
for(let i = 0; i<newUsers.length; i++){
    if(currentUsers.includes(newUsers[i])){
        console.log(`Sorry, '${newUsers[i]}' is already in use. Please choose another username.`);
    } 
}