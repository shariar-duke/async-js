// Refactoring the call back example with js promise 


function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data from Database ...")
            resolve({ id: id, name: "Rahim" })

        }, 2000)
    })

}


function getCourses(student) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student courses from Database ...")
            resolve({ id: student.id, name: student.name, courses: ["js", "python"] })
        }, 1500)
    })

}

function getQuizMarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("marks")
            resolve({
                [courses[0]]: 20,
                [courses[1]]: 14
            })

        }, 1200)
    })

}


// ekhne call korar somoy fist ekta promise k call korbo . or then theke or positive result ta ber kore anbo . Then or modhe abar porer function take call kro jno . ei promise
// er ses a thn korle r ekta promise pawa jay. karon j function gula return korbo ogula  asole a promise a return kroe 

getStudent(2).then((student) => {
    console.log("The student is", student)
    return getCourses(student)
}).then((sutdentDetails) => {
    console.log("Student Details are", sutdentDetails)
    return getQuizMarks(sutdentDetails.courses)
}
).then((marks) => {
    console.log("The marks of the sutdent in each subject", marks)
}).catch((err) => console.log("I found an error"))

// I have done this And converted this from call back to promsie  This is more readable now and well structured 
