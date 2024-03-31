function makeSandwich(items) {
    console.log("Sandwich Making:");
    if (items.length == 0) {
        console.log("choose items!");
    }
    else {
        console.log("Items:", items.join(', '));
    }
}
makeSandwich(["Zinger Patty", "Cheese", "Lettuce"]);
makeSandwich(["Cucumber", "Chicken"]);
makeSandwich([]); // Empty array as no arguments
