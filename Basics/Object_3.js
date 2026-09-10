const course = {
    courseName: "Java-Script",
    price: "999",
    courseInstructor: "hitesh "
}

// console.log(course.courseInstructor) --> but it is not good to access

const {courseInstructor} = course
console.log(courseInstructor)
// or
const {courseInstructor: instructor} = course
console.log(instructor)
