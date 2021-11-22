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

// Add unordered list inside element of id=“content” with 5 list items. Each item contains text and number like this. Use for-loop to set numbering.
let content = document.getElementById("content");
let ul = document.createElement("ul")
content.appendChild(ul)
for(let i = 1; i < 6; i++) {
    let li = document.createElement("li")
    li.textContent = "Number " + i;
    ul.appendChild(li)
}

// Construct next table in the end of div that has id=“content”
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("content").appendChild(table);

let rivi1 = document.createElement("tr");
let otsikko1 = document.createElement("th");
otsikko1.innerHTML = "Last Name";
let otsikko2 = document.createElement("th");
otsikko2.innerHTML = "First Name";

rivi1.appendChild(otsikko1);
rivi1.appendChild(otsikko2);
thead.appendChild(rivi1);

let rivi2 = document.createElement("tr");
let rivi2_data1 = document.createElement("td")
rivi2_data1.innerHTML = "Doe";
let rivi2_data2 = document.createElement("td");
rivi2_data2.innerHTML = "John";

rivi2.appendChild(rivi2_data1);
rivi2.appendChild(rivi2_data2);
tbody.appendChild(rivi2);

// f make horizontal line before each child of id="content"
let element = document.querySelectorAll("#content>*")
for(const e of element) {
    let hr = document.createElement("hr");
    e.parentElement.insertBefore(hr, e);
}

// g Add span element with text content
elems = document.querySelectorAll("div>:first-child");
for(const e of elems) {
    let span = document.createElement("span")
    span.textContent = "**"
    e.parentElement.insertBefore(span, e)
}
