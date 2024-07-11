// Rest operator 

function sum(name, ...rest) {
    console.log(name)
    console.log(rest)
}


sum("Shariar Mahamud", 1, 2, 3, 4)

// rest mane holo ami j gula element chonno chra hoye pathabo se gula recive hbe ekta array hibe 
// ekhen function call koar somoy j argument duta dise porer tay onk gula random number dhalao vbe dise . but function tar peramter a eta array hisebe receive hosie 

// some more rest operrator example : 
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
console.log(sum()); // Output: 0 (no arguments)

// Example 2: Concatenating Strings

function concat(separator, ...strings) {
    return strings.join(separator);
}

console.log(concat("-", "apple", "banana", "orange")); // Output: "apple-banana-orange"
console.log(concat(", ", "Hello", "world")); // Output: "Hello, world"
console.log(concat("")); // Output: "" (no strings)


// Example 3: Finding Maximum Number
function max(...numbers) {
    return Math.max(...numbers);
}

console.log(max(1, 2, 3, 4, 5)); // Output: 5
console.log(max(-1, -2, -3)); // Output: -1
console.log(max()); // Output: -Infinity (no arguments)


// 4: Function Parameters with Fixed and Rest Parameters
function greet(greeting, ...names) {
    names.forEach(name => {
        console.log(`${greeting}, ${name}!`);
    });
}

greet("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
