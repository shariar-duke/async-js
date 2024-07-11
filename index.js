// Example 1: Destructuring Multiple Levels

const userProfile = {
    id: 101,
    name: "Alice",
    contact: {
        email: "alice@example.com",
        phone: {
            home: "123-456-7890",
            work: "098-765-4321"
        }
    },
    address: {
        street: "123 Main St",
        city: "Wonderland",
        coordinates: {
            lat: 34.0522,
            lng: -118.2437
        }
    }
};

// Destructuring nested properties
const {
    contact: {
        email,
        phone: { home, work }
    },
    address: {
        city,
        coordinates: { lat, lng }
    }
} = userProfile;

console.log(email); // Output: "alice@example.com"
console.log(home);  // Output: "123-456-7890"
console.log(work);  // Output: "098-765-4321"
console.log(city);  // Output: "Wonderland"
console.log(lat);   // Output: 34.0522
console.log(lng);   // Output: -118.2437


// Example 2: Renaming Variables During Destructuring

const book = {
    title: "JavaScript: The Good Parts",
    author: {
        firstName: "Douglas",
        lastName: "Crockford"
    },
    publication: {
        year: 2008,
        publisher: {
            name: "O'Reilly Media",
            location: "USA"
        }
    }
};

// Destructuring with renaming
const {
    title: bookTitle,
    author: { firstName: authorFirstName, lastName: authorLastName },
    publication: {
        year: pubYear,
        publisher: { name: pubName, location: pubLocation }
    }
} = book;

console.log(bookTitle);       // Output: "JavaScript: The Good Parts"
console.log(authorFirstName); // Output: "Douglas"
console.log(authorLastName);  // Output: "Crockford"
console.log(pubYear);         // Output: 2008
console.log(pubName);         // Output: "O'Reilly Media"
console.log(pubLocation);     // Output: "USA"


// author: { firstName: authorFirstName, lastName: authorLastName },  // ekhne amara abar rename kortse 


// Example 3: Default Values in Destructuring
const company = {
    name: "Tech Corp",
    address: {
        street: "456 Tech Ave",
        citys: "Techville",
        zip: "12345"
    },
    employees: {
        count: 500,
        departments: {
            engineering: {
                head: "Jane Doe",
                staffCount: 150
            },
            hr: {
                head: "John Smith",
                staffCount: 50
            }
        }
    }
};

// Destructuring with default values
const {
    address: { country = "Unknown", citys },
    employees: {
        departments: {
            engineering: { head: engHead, staffCount: engStaff = 0 },
            hr: { head: hrHead, staffCount: hrStaff = 0 },
            sales: { head: salesHead = "N/A", staffCount: salesStaff = 0 } = {} // Default empty object if sales is not defined
        }
    }
} = company;

console.log(country);   // Output: "Unknown"
console.log(city);      // Output: "Techville"
console.log(engHead);   // Output: "Jane Doe"
console.log(engStaff);  // Output: 150
console.log(hrHead);    // Output: "John Smith"
console.log(hrStaff);   // Output: 50
console.log(salesHead); // Output: "N/A"
console.log(salesStaff);// Output: 0

