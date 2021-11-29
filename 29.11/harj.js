
let courses = [];
document.querySelector("button").addEventListener("click", addCourse);

function addCourse(){
    // haetaan tiedot input kentistä
    let cname = document.getElementById("course").value
    let participant = document.getElementById("num").value
// luodaan tiedoista olio
    let course = {
        course_name: cname,
        num: participant
    }
    // lisätään olio taulukkoon
    courses.push(course)
}