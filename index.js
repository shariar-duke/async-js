function blockingFunction() {
    // Simulating a long operation
    const start = Date.now();
    while (Date.now() - start < 5000) { }  // Blocks for 5 seconds
    console.log("Finished blocking function");
}

blockingFunction();  // UI is unresponsive during this time
console.log("This won't execute until the blocking function completes");
