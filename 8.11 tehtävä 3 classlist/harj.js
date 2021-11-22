document.querySelector("button").addEventListener("click", buttonClicked2)


function buttonClicked(){
    document.querySelector("div").classList.add("colored")
}
//2
function buttonClicked2(){
    let color = document.getElementById("mycolor").value
    document.querySelector("div").style.backgroundColor = color;
}
