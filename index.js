console.log("Line 1")

const student = getStudent(1)
console.log("The student data is", student)

console.log("line 2")

function getStudent(id) {
    setTimeout(() => {
        console.log("Fetching from database the sutednts data")
        return { id: id, name: "Shariar" }
    }, 2000)
}



// problem with syncronous
// const student = getStudent(1) ei function tar por nciher console log syncronouly print hosie
// console.log("The student data is", student)
// 2 second por function call hye value asche thiki but student er modhe r data dhuek nai 