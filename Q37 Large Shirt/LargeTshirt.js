var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.makeShirt = function () {
        console.log("This is my ".concat(this.size, " size shirt, with the message: ").concat(this.message, "."));
    };
    return Shirt;
}());
var large = new Shirt();
large.makeShirt();
var medium = new Shirt("medium");
medium.makeShirt();
var small = new Shirt("Small", "My Shirt");
small.makeShirt();
