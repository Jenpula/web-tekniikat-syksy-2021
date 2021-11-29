let phones = ["henri", "liisa"];

document.querySelector("button").addEventListener("click", myFunction);
fetch('https://api-mobilespecs.azharimm.site/v2/brands/honor-phones-121')
        .then(response => response.json())
        .then(rest_data => phones=rest_data.data.phones)
        .catch(e => console.log(e));

        let hnames = phones.filter( item => item[0] === "H");
function myFunction() {
        let phones = document.getElementById("pname").value
        document.getElementById("results").innerHTML = hnames;

}

