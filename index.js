// Example 1: Copying Arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]


// Example 2: Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Spreading Elements in Function Calls

function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
console.log(sum(...numbers))

// Example 4: Copying Objects

const originalObject = { a: 1, b: 2, c: 3 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2, c: 3 }


// Example 5: Merging Objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }


// Example 6: Adding New Properties to Objects
const originalObject2 = { a: 1, b: 2 };
const newObject = { ...originalObject, c: 3 };

console.log(newObject); // Output: { a: 1, b: 2, c: 3 }

// Example 7: Combining Arrays and Adding Elements
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const combinedArray = [...array3, 'new element', ...array4];

console.log(combinedArray); // Output: [1, 2, 3, 'new element', 4, 5, 6]


// Example 8: Using Spread Operator with Strings
const string = "hello";
const characters = [...string];

console.log(characters); // Output: ['h', 'e', 'l', 'l', 'o']


// Example 9: Using Spread Operator with Function Arguments
function multiply(x, y, z) {
    return x * y * z;
}

const args = [2, 3, 4];
console.log(multiply(...args)); // Output: 24


// Example 10: Combining Spread and Rest Parameters

function collectArguments(first, ...rest) {
    console.log(first)
    console.log(rest)
}

const arg2 = [1, 2, 4, 6, 8, 9]

collectArguments(...arg2)
