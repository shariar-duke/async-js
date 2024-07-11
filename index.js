// Array.map
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]

const result = fruits.map((f) => f === "Mango" || f === "Man")
console.log(result)

// result  [ false, false, false, false, true ]
// karon array.map korle result er modhe same length er array create hbe . ekhne condition millo na tai true false
// array map a generally emn kisu kroe na . Array map a jeta kroe set holo protibar j elmeent er access pasch tar upor kno kisu kora labe naki seta kore return krer 