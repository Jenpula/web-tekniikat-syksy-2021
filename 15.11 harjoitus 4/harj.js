//Lisätään napin kuuntelijafunktio
document.querySelector("button").addEventListener("click", addNote)
//Haetaan dokumentin elementit
let body = document.querySelector("body")
let user = document.getElementById("name")
let note = document.getElementById("note")
let checkbox = document.getElementById("important")