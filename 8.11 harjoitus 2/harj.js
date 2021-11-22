// Changed h2 text to let's manipulate some DOM again.
let firstChange = document.querySelector("h2");
firstChange.textContent = "Let´s manipulate some DOM again"

// made an horizontal line above header.
let line = document.createElement("hr")
firstChange.parentElement.insertBefore(line, firstChange);

// Change text content between the first and last p element inside article
let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp
