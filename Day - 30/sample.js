//console.log("Reg Exp");
/*
//dot(.)
var re = /h.t/g;
var text = "I wear a hot hat pot";
var res = text.match(re);
console.log(res);
//Caret(^)
var re = /^The/gi;
var text = "the Apple";
var res = text.match(re);
console.log(res);
//Doller($)
var re = /Boy.$/gi;
var text = "I am a boy.";
var res = text.match(re);
console.log(res);
//Astrisk(*)
var re = /ab*c/g;
var text = " abc bac abbc abd";
var res = text.match(re)
console.log(res);
//Plus(+)
var re = /ab+c/g;
var text = " abc bac abbc abd";
var res = text.match(re)
console.log(res);
//Question Mark (?)
var re = /colors?/g;
var text = "I have black colors toy";
var res = text.match(re);
console.log(res);
//Curly braces({})
var re = /\d{3}-\d{3}-\d{4}/g;
var text = "7894570611,789-357-0611";
var res = text.match(re);
console.log(res);
//Square Brackets ([])
var re = /[ch]at/g;
var text = "I have a cat with hat and bat";
var res = text.match(re);
console.log(res);
//Pipe (|)
var re = /cat|hat/g;
var text = "I have a cat with hat and bat";
var res = text.match(re);
console.log(res);
*/

//Objects - Literal Notation
//Creation
var obj = {
    name : "Sai",
    mobile : "7893570611",
    age : "28"
}
console.log(obj);
//Accessing
console.log(obj.mobile);
//Adding
obj.gender = "Male";
console.log(obj);
//Modifying
obj.name = "Sai Vardhan";
console.log(obj);
//Deleting
delete obj.age;
console.log(obj);
//Methods
var keyss = Object.keys(obj);
console.log(keyss);
var valuess = Object.values(obj);
console.log(valuess);
var entriess = Object.entries(obj);
console.log(entriess);

//Objects - Object Contructors
/*
//Creation
var obj = new Object();
console.log(obj);
//Adding
obj["name"] = "Sai Vardhan";
obj["mobile"] = "78935706111";
obj["age"] = "28";
obj["gender"] = "Male";
console.log(obj);
//Modifying
obj["mobile"] = "9902519521";
console.log(obj);
//Accessing
console.log(obj["mobile"]);
//Deleting
delete obj["mobile"];
console.log(obj);
//Methods
var k = Object.keys(obj);
console.log(k);
var v = Object.values(obj);
console.log(v);
var e = Object.entries(obj);
console.log(e);
*/