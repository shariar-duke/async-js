// Array.map
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]

const result = fruits.map((f) => {
    if (f === "Mango" || f === "Man") {
        return f
    }
}
)

console.log(result)

// Array.map k filter er moto use korte chiale emn hbe. same length er result array asbe but baki gula te undefined thakbe j gular condition milebe na
// but filter korle sudhu oi elemnet gulari array hoto .

// result
// [ undefined, undefined, undefined, undefined, 'Mango' ]


