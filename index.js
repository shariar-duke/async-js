// Array.find
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// Proti ta array method er modhe ekta kore call back function dia dite hoy r kih
// Eta just first er ta return kore dibe . R jode kisu na pay tahle return korbe hlo undefined
const result = fruits.filter((f) => f === "Mango" || f === "Man")
console.log(result)

// arary find sudhu dkehe konta age ei condition meet kroe . j meet korbe take nia ase result er mdohe dhukabe. r chekck o krobe na . so array find er value suhdu ekta value
// eta kokhno array na 