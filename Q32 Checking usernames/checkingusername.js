var currentUsers = ["Minahilf", "haniyakh4", "Kinza99", "AliKhan23", "UsmanR22"];
var newUsers = ["haniyakh4", "kiran42", "Minahilf", "humakhan2", "hamzasaif2"];
for (var i = 0; i < newUsers.length; i++) {
    if (currentUsers.includes(newUsers[i])) {
        console.log("Sorry, '".concat(newUsers[i], "' is already in use. Please choose another username."));
    }
}
