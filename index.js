// Example 4: Destructuring Arrays Within Objects
const product = {
    id: 202,
    name: "Smartphone",
    specs: {
        dimensions: [150, 75, 7.7],
        weight: 180,
        features: ["4G", "5G", "WiFi", "Bluetooth"]
    }
};

// Destructuring arrays within objects
const {
    specs: {
        dimensions: [length, width, height],
        features: [feature1, feature2, ...otherFeatures]
    }
} = product;

console.log(length);       // Output: 150
console.log(width);        // Output: 75
console.log(height);       // Output: 7.7
console.log(feature1);     // Output: "4G"
console.log(feature2);     // Output: "5G"
console.log(otherFeatures);// Output: ["WiFi", "Bluetooth"]
