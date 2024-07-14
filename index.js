// Simulating an asynchronous API call with a promise
function fetchUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 3000);  // Simulating a 3-second delay
    });
}

async function getUser() {
    console.log("Starting to fetch user data...");

    // Awaiting the fetchUserData call (this will not block the UI)
    const user = await fetchUserData();
    console.log("User data fetched:", user);

    console.log("Finished processing user data.");
    return user;
}

// Calling the async function
getUser().then(user => {
    console.log("The user data received:", user);
})


// Example of other code that can run while waiting for the async operation
console.log("This message can be logged immediately, even while waiting for user data.");

