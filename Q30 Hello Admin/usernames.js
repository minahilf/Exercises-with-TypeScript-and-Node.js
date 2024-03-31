var userName = ["admin", "amnakhan", "sara443", "minahil665", "adminboy"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
