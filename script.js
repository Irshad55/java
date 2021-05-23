console.log("loading JS")

var a = "3"
var b = 3
var c
var d = null
var e = true
var a = "3";
console.log(a, typeof(a));

var b = 3;
console.log(b, typeof(b));

var c;
console.log(c, typeof(c));

var d = null;
console.log(d, typeof(d));

var e = true;
console.log(e, typeof(e));

// hosting
console.log(g, typeof(g));
var g = 6

// if

a = 3, b = 5

if (a > b) {
    console.log(a, "is greater")
}
else {
    console.log(b, "is greater")
}

// function

function add(a, b) {
    var sum = a + b;
    console.log("Total count is", sum)
}
add(55, 6);