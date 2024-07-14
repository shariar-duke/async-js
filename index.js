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



// ekta ayync function lekhbo tar modhe amra await dia oi function gula k call korbo jara promise return kore . 
// Promise ekta asyncrounous jinis tai eta call er age await dite hoy . jate  joto khon execution na hoy toto khon staty kore 
//  r ei await kore call kora gula j function er under a hotse tar age async dite hbe 
async function fetchStudentData(id) {
    try {
        const student = await getStudent(id);
        console.log("Student fetched:", student);

        const courses = await getCourses(student);
        console.log("Courses fetched:", courses.courses);

        const marks = await getQuizMarks(courses.courses);
        console.log("Quiz marks fetched:", marks);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
// oi async fucntion take call kore dilam 
fetchStudentData(1);


// ekhne upore onk gula function ase j gula sob gula sbai promise return kore
// ekta async function baniase jar mohde ei promsie gula sob promsie k call korse call korar age await dite hoy
// ekdom last a oi async funtion take call kroe dise . 
