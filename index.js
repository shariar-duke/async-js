// call back hell

console.log("Line 1")

function studentInfo(student) {
    console.log("The student I got is ", student)
    getCourses(student, studentInfoWithCourses)
}

function studentInfoWithCourses(studentDetails) {
    console.log(studentDetails)
    getQuizMarks(studentDetails.courses, studentQuizMarks)
}

function studentQuizMarks(quizMark) {
    console.log("the quiz marks are", quizMark)
}

// This was the starting . Here The defination/body of the call back functions are seperately declared
getStudent(2, studentInfo)

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