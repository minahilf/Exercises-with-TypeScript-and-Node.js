//1. Tests for equality and inequality with strings
let myFatherName = `Aamir`;
console.log("Is myFatherName == `Aamir`?");
if(myFatherName == `Aamir`){
    console.log(`True`);
} else {
        console.log(`False`);
    }

//2.  Tests using the lower case function
let myNameInLowerCase = `minahil`;
console.log("Is myNameInLowerCase == `MINAHIL`?");
console.log(myNameInLowerCase == `MINAHIL`);

//3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 6;
let num2 = 8;

// ==
console.log("Is num1 == num2?");
if(num1 == num2){
    console.log(`True`);
} else {
    console.log(`False`);
}

// !==
console.log("Is num1 !== num2?");
console.log(num1!==num2);

//< or >
console.log("Is num1 > num2?");
if (num1>num2){
console.log("true");
}
console.log("False");
console.log("Is num1 < num2?");
if (num1<num2){
    console.log("false");
}

// <= or =>
console.log("Is num2 <= num1?");
console.log(num2 <= num1);
console.log("Is num2 >= num1 ?")
console.log(num2 >= num1);

//4. Tests using "and" and "or" operators
let myName = `Minahil`;
let myAge = 20;

// AND
console.log("Is my name Minahil and my age 20?");
console.log(myName == `Minahil` && myAge == 20);

//OR
console.log("Is my name Minahil and my age 25?");
console.log(myName == `Minahil` ||  myAge == 25);

//5. Test whether an item is in a array
let guests: String[] = [`Abeesha`, `Amna`, `Shiza`, `Laiba`, `Huma`, `Shafaq`];
if(guests.includes(`Shafaq`)){
    console.log(`Yes '${`Shafaq`}' is in the array `)
}

//6.  Test whether an item is not in a array
if(guests.includes('Wanya')){
    console.log(`${`Wanya`} is not in the array`);
}  else {
        console.log(`No, ${'Wanya'} is not in the array.`);
    }

