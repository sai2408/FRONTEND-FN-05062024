//functions
//function Declaration
console.log("Function Declaration");
/*
function reverse(n){
    res = 0
    while (n!=0){
        r = n%10;
        res = (res*10)+r;
        n = parseInt(n/10);
    }
    return res;
}
var x = -123;
if (x >= 0){
    x = reverse(123);
    console.log(x);
}
else{
    x = x * -1
    z = reverse(x);
    console.log(-1*z);
}
*/
console.log("Function Expression");
//function Expression
/*
var reverse = function (n){
    res = 0
    while (n!=0){
        r = n%10;
        res = (res*10)+r;
        n = parseInt(n/10);
    }
    return res;
}
var x = 123;
var y = 3; //31233
var res = (x*10)+3;
res = reverse(res);
res = (res*10)+3;
res = reverse(res);
console.log(res);
*/
//Arrow Function
console.log("Arrow Function")
/*
var result = (n,s) => {
    console.log(n%s);
}
result(13,4);
*/
//IIFE
console.log("IIFE");
/*
(function(){
    var n = 5;
    var res = 1;
    for(var i=1;i<=n;i++){
        res = res * i;
    }
    console.log(res);
})();
*/
//Named Function
console.log("Named Function");
/*
var hello = function checknum(n){
    if (n%2==0){
        console.log("even")
    }
    else{
        console.log("Odd");
    }
}
hello(12);
*/
//User defined Functions - Types
console.log("With Parameters with return type");
function wpwr(a,b,c){
    return a+b+c;
}
console.log("With Parameters with out return type");
console.log(wpwr(10,20,30));
console.log("With out Parameters with return type");
function wpwor(a,b,c){
    console.log(a+b+c);
}
console.log(wpwor(10,20,30));
console.log("With out Parameters with out return type");
function wopwr(){
    return 10+20+30;
}
console.log(wopwr());

function wopwor(){
    console.log(10+20+30);
}
wopwor();










