// call back function with named function 

// this is the function which will be used as callback function 
// Define the Named Callback Function:

function handleStudnet(person) {
    console.log("Id id", person.id);
    console.log("name id ", person.name);
}

console.log("Line 1");

// Pass the handleStudnet as a Callback fucntion:


getStudent(2, handleStudnet)

// ekhne ekta function er body pass kora hosche argument fuction call korar somoy 

console.log("line 2");

// ekhne function take receive kra hosche sudhu . r ekta abar call back kora hbe tai etar name call back 
function getStudent(id, myCallback) {
    setTimeout(() => {
        console.log("Fetching the data ")
        myCallback({ id: id, name: "Shariar" })
    }, 2000)
}