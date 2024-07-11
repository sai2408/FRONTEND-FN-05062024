console.log("String Methods");
/*
//charAt();
x = "Sai Vardhan";
console.log(x.charAt(6));
//charCodeAt();
console.log(x.charCodeAt(1));
//concat();
y = x.concat(" T");
console.log(y);
//startswith();
console.log(x.startsWith("Sai"));
//endswith();
console.log(x.endsWith("Vardhan"));
//includes();
console.log(y.includes("T"));
//indexOf();
console.log(y.indexOf("T"));
console.log(x.indexOf("a"));
//lastIndexOf();
console.log(x.lastIndexOf("a"));
//repeate();
z = "Sai ";
console.log(z.repeat(3));
//replace();
z = "Python"
console.log(z.replace("P","C"));
//slice();
console.log(x.slice(0,3));
//split();
console.log(y.split(" "))
//substring();
console.log(x.substring(0,3));
//toLowerCase();
console.log(x.toUpperCase());
//toUpperCase();
console.log(x.toLowerCase());
//trim();
z = "       sai Vardhan     ";
console.log(z.trim());
*/
console.log("Regular Expression");
//Literal Notation
var re1 = /j.*t/i;
console.log(re1.test("JavaScript"));
console.log(re1.exec("Javascript ,JavapoinT"));

//Object Notation
var re2 = new RegExp("j.*t","i");
console.log(re2.test("JavaScript"));
console.log(re2.exec("JavaScript, JavapoinT"));