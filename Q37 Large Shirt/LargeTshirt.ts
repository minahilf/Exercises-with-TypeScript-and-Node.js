class Shirt {
    size: string;
    message: string;
  
    constructor(size: string = "large", message: string = "I love TypeScript") {
      this.size = size;
      this.message = message;
    }
  
    makeShirt(): void {
      console.log(`This is my ${this.size} size shirt, with the message: ${this.message}.`);
    }
  }
  let large = new Shirt();
  large.makeShirt();
  let medium = new Shirt("medium");
  medium.makeShirt();
  let small = new Shirt("Small", "My Shirt");
  small.makeShirt();