var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "My Own Shirt"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.makeShirt = function () {
        console.log("Here is my ".concat(this.size, " size shirt, with message written on it ").concat(this.message, "."));
    };
    return Shirt;
}());
var large = new Shirt();
var medium = new Shirt("medium");
var small = new Shirt("small");
large.makeShirt();
medium.makeShirt();
small.makeShirt();
