// call back hell

console.log("Line 1")

getStudent(2, (student) => {
    console.log("The student I got is ", student)
    getCourses(student, (studentDetails) => {
        console.log(studentDetails)
        getQuizMarks(studentDetails.courses, (quizMark) => {
            console.log("the quiz marks are", quizMark)
        })
    })
})

console.log("Line 2")

function getStudent(id, cb) {
    setTimeout(() => {
        console.log("Fetching data from Database ...")
        cb({ id: id, name: "Rahim" })

    }, 2000)
}

// Another function that receive a call back function

function getCourses(student, cb) {
    setTimeout(() => {
        console.log("Student courses from Database ...")
        cb({ id: student.id, name: student.name, courses: ["js", "python"] })
    }, 1500)
}

function getQuizMarks(courses, cb) {
    setTimeout(() => {
        console.log("marks")
        cb({
            [courses[0]]: 20,
            [courses[1]]: 14
        })
    }, 1200)
}