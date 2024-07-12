console.log("Line 1")

console.log("line 2")

// The above pattern is called syncronous patter or blocking pattern 


setTimeout(() => {
    console.log("This will execute after 2 seconds")
}, 2000)


console.log("line3")

// here line3 will execute before setTimeout funciton all though setTimeout is above the console.log("line3")
// This is non blocking pattern this will not hold the exuectuon of line3