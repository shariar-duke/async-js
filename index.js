// Array Reduce
const numbers = [1, 2, 3, 4, 6]

// const result = numbers.reduce((total, current) => total+current,0)
const result = numbers.reduce((total, current) => {
    return total + current  // jode call back function er modhe { } thake tahle return kore dite hbe 
}, 0)

console.log(result)