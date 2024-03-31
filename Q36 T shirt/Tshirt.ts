class Shirt{
    size:String;
    message:String;
    constructor(size:String = "large" , message:String = "My Own Shirt"){
        this.size = size;
        this.message = message;
    }
    makeShirt(): void{
        console.log(`Here is my ${this.size} size shirt, with message written on it ${this.message}.`);
    }
}
let large = new Shirt();
let medium = new Shirt("medium");
let small = new Shirt("small");
large.makeShirt();
medium.makeShirt();
small.makeShirt();