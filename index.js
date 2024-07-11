const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan"
};

let versionKey = "latestVersion"; // Variable name without spaces
let versionValue = 4; // Numeric value for latestVersion

// ekhn jdoe new ekta object bananbo jkhen language object theke ekta besi property thakbe . tar key hbe let versionKey er value and tar value hbe versionVlaue er value 

const updatedLanguage = {
    ...language,
    [versionKey]: versionValue
}
console.log(updatedLanguage);
