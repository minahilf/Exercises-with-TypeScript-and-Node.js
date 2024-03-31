function makeSandwich(items: string[]): void {
    console.log("Sandwich Making:");
    if(items.length == 0){
        console.log("choose items!")
    } else {
    console.log("Items:", items.join(', '));
}
}
makeSandwich(["Zinger Patty", "Cheese", "Lettuce"]);
makeSandwich(["Cucumber", "Chicken"]);
makeSandwich([]); 
