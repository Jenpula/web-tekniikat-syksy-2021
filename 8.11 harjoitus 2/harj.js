// Changed h2 text to let's manipulate some DOM again.
let firstChange = document.querySelector("h2");
firstChange.textContent = "Let´s manipulate some DOM again"

// made an horizontal line above header.
let line = document.createElement("hr")
firstChange.parentElement.insertBefore(line, firstChange);
