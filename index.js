// null and undefined er belay sudhu ?? eta chole 

// The nullish coalescing operator (??) is a useful tool for providing default values when dealing with null or undefined. Here are some more examples to illustrate its use:

let username = null;
let defaultUsername = "Guest";

let displayName = username ?? defaultUsername;

console.log(displayName); // Output: "Guest"


// Example 2: Using with Undefined

let age;
let defaultAge = 25;

let userAge = age ?? defaultAge;

console.log(userAge); // Output: 25


// Example 3: Nested Nullish Coalescing


let config = {
    timeout: null,
    retries: undefined
};

let timeout = config.timeout ?? 5000;
let retries = config.retries ?? 3;

console.log(timeout); // Output: 5000
console.log(retries); // Output: 3


// Example 4: Nullish Coalescing with Function Parameters

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name ?? "Anonymous"}!`;
}

console.log(greet(null)); // Output: "Hello, Anonymous!"
console.log(greet("Alice")); // Output: "Hello, Alice!"
console.log(greet("Bob", "Hi")); // Output: "Hi, Bob!"


// Example 5: Comparing with Logical OR (||)

let value = 0;

let result = value ?? 42;
console.log(result); // Output: 0 (because 0 is not null or undefined)

let resultOr = value || 42;
console.log(resultOr); // Output: 42 (because 0 is falsy)


// Example 6: Complex Object with Nested Properties

let userProfile = {
    name: "Alice",
    preferences: {
        theme: null,
        language: "en"
    }
};

let theme = userProfile.preferences.theme ?? "default";
let language = userProfile.preferences.language ?? "en";

console.log(theme); // Output: "default"
console.log(language); // Output: "en"


// Example 7: Nullish Coalescing with Arrays

let scores = [null, undefined, 50, 60];

let firstScore = scores[0] ?? 100;
let secondScore = scores[1] ?? 100;
let thirdScore = scores[2] ?? 100;

console.log(firstScore); // Output: 100
console.log(secondScore); // Output: 100
console.log(thirdScore); // Output: 50


// Example 8: Nullish Coalescing with Nested Objects

let book = {
    title: "JavaScript: The Good Parts",
    author: null
};

let authorName = book.author ?? "Unknown Author";

console.log(authorName); // Output: "Unknown Author"


// Example 9: Nullish Coalescing with Default Function Arguments

function createUser(name, age = null, country = null) {
    return {
        name: name ?? "Anonymous",
        age: age ?? 18,
        country: country ?? "Unknown"
    };
}

console.log(createUser("Alice")); // Output: { name: 'Alice', age: 18, country: 'Unknown' }
console.log(createUser(null, 25, "USA")); // Output: { name: 'Anonymous', age: 25, country: 'USA' }
console.log(createUser(undefined, undefined, "UK")); // Output: { name: 'Anonymous', age: 18, country: 'UK' }
