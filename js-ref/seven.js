// toString 

let value = true;
document.write(typeof value + "<br>");

value = String(value);
document.write(typeof value + "<br>");

// toNumber

let str = "1992";
document.write(typeof str + "<br>");

let num = Number(str);
document.write(typeof num + "<br>");

// toBolean

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false