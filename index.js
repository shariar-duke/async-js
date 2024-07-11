// false 
if (!false) {
    console.log("false is falsy"); // Output: "false is falsy"
}


//0
if (!0) {
    console.log("0 is falsy"); // Output: "0 is falsy"
}

// -0
if (!-0) {
    console.log("-0 is falsy"); // Output: "-0 is falsy"
}

// 0n (BigInt zero)
if (!0n) {
    console.log("0n is falsy"); // Output: "0n is falsy"
}


// "" (empty string)
if (!"") {
    console.log('"" is falsy'); // Output: '"" is falsy'
}

// null
if (!null) {
    console.log("null is falsy"); // Output: "null is falsy"
}

// undefined
if (!undefined) {
    console.log("undefined is falsy"); // Output: "undefined is falsy"
}


// NaN
if (!NaN) {
    console.log("NaN is falsy"); // Output: "NaN is falsy"
}


const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

falsyValues.forEach(value => {
    if (!value) {
        console.log(`${value} is falsy`);
    }
});

// Outputs:
// "false is falsy"
// "0 is falsy"
// "0 is falsy"
// "0 is falsy"
// "" is falsy
// "null is falsy"
// "undefined is falsy"
// "NaN is falsy"

