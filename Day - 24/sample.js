console.log("Arrays");
var a = [10,20,"sai",34.5];
var b = new Array(100,200,"Sai vardhan",90.5);
console.log(a);
console.log(b);

console.log(a[2]);
console.log(b[1]);

a[0] = 1000;
console.log(a);

b[3] = 400.567;
console.log(b);

x = [10,20,30,"a","b","c"];
console.log(x);

y = x.push("d");
console.log(y);
console.log(x);

y = x.pop();
console.log(y);
console.log(x);

y = x.shift();
console.log(y);
console.log(x);

y = x.unshift(70);;
console.log(y);
console.log(x);

y = x.slice(2,4);
console.log(y);
console.log(x);

var a = [10,20,30];
var b = [40,50,60];
var y = b.concat(a);
console.log(y);

var x = ["a","b","c","d","b","gt"];
var y = x.join(" ");
console.log(y);

var y = x.indexOf("b");
console.log(y);

x = [10,20,30,40,50];
var y = x.forEach(function(i){
    console.log(i+100);
});

var x = [1,2,3,4,5];
var y = x.map(function(i){
    return i+30;
});
console.log(y);

var x = [1,2,3,4,5];
var y = x.filter(function(i){
    return i%2==0;
});
console.log(y);

var x = [1,2,3,4,5];
var y = x.reduce(function(acc,cv){
    return (cv+acc);
},10);
console.log(y);