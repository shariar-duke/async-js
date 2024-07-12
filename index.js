async function getStudent(id, myCallback) {
    try {
        const response = await fetch(`https://api.example.com/students/${id}`);
        const data = await response.json();
        console.log("Fetching the data");
        myCallback(data);
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

// Define the callback function
function handleStudent(person) {
    console.log("Id id", person.id);
    console.log("name id", person.name);
}

console.log("Line 1");

// Call getStudent with the named function
getStudent(2, handleStudent);

console.log("line 2");


// call back funtion ei jnno use kra hoy jno jokhn amra ekta function call korbo. oi function er kaj ta ses hole jno tar ses a r ekta fucntion k call kore dite pare . 