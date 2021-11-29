
let courses = [];
document.querySelector("button").addEventListener("click", addCourse);
document.getElementById("show").addEventListener("click", showAll);
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

function showAll() {
    courses.forEach( course => {
        let li = document.createElement("li");
        li.textContent = "Course " + course.course_name + " has " + course.num + " students registered"
        document.querySelector("ul").appendChild(li);
    });
        
    }



