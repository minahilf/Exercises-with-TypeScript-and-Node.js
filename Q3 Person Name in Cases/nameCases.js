var personName = "Minahil";
//lowercase
console.log("lowercase:", personName.toLowerCase());
//uppercase
console.log("uppercase:", personName.toUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
