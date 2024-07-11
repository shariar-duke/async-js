// Object distructuring 
const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

console.log(user.age)
const { name, age } = user;

console.log("The age is", age)


// If I want to get access of he degree

const { education: { degree } } = user; // Nested destructuring to extract degree directly



console.log(degree); // Output: "Graduate"

// Nested Destructuring
// To destructure a nested property, you need to specify both the outer property and the inner property. Here’s the logic:

// Outer Property: You need to tell JavaScript to look inside the education property.
// Inner Property: You then specify which property inside education you want to extract.
// Combining these two steps into one line, the syntax is:

// const { education: { degree } } = user;


// education:: Look inside the education property of the user object.
// { degree }: Extract the degree property from the education object.



// another example : 

const user2 = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate",
        institution: {
            instutionName: "University of XYZ",
            location: "City ABC"
        }
    }
};

// Destructure the name of the institution directly from the user object

const { education: { institution: { instutionName } } } = user2

console.log("The instutuion name is", instutionName)