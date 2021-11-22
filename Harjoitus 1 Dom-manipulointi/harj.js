//Harj a
var aelem =  document.getElementById("content")
console.log(aelem.nodeName)

//Harj b
var firstBasic = document.querySelector(".basic")
console.log(firstBasic.nodeName)

//Harj c
var allItems = document.getElementsByTagName("li")
for(i of allItems){
    console.log(i.textContent)
}

//Harj d
var body = document.querySelector("body")
var allNodes = body.querySelectorAll("*")

for (x of allNodes) {
    console.log(x.nodeName)
}