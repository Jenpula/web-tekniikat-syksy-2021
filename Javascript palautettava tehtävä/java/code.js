
// Tehty http requesti
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.covid19api.com/dayone/country/finland/status/confirmed/live", true)
 
// lähetetty requesti
xmlhttp.send();

// luodaan event handler
xmlhttp.onreadystatechange=function() {

    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
        let answerObject = JSON.parse(this.response);
        
        document.getElementById("feedback2").innerHTML= answerObject[answerObject.length-1].Cases
        document.getElementById("covid19Date").innerHTML = answerObject[answerObject.length-1].Date
    }

  }
 
  
 // searchbar
 document.querySelector('#searchButton').addEventListener("click", submitted);
function submitted() {
  type="text/javascript">
document.getElementById('searchform').onsubmit
    window.location = 'http://www.google.com/search?q=site:index.html' + document.getElementById('test').value;
    return false;
}



 
 
 






document.querySelector("#navButton").addEventListener("click", newFunction);

function newFunction() {
    document.getElementById("text").innerHTML = "<h3>Tutustumaan palveluihimme pääset ottamalla yhteyttä puhelinnumeroomme, lähettämällä sähköpostia tai tulemaan paikanpäälle. <p>Tarjoamme ensimmäisen kerran ilmaiseksi.!</h3> <p> Ota yhtettä: <p>puh: 0505503465 <p> Sähköp. hyväolo@gmail.com<p> Osoite: Jukolankuja 2 90350 Oulu<p>"

}
document.querySelector("#positive").addEventListener("click", function() {
    document.getElementById("feedback").innerHTML = "<p>Hienoa että löysit tarvitsemasi<p> Jaa sivu myös ystävillesi!"
});

document.querySelector("#negative").addEventListener("click", buttonFunction);
document.querySelector("#negative2").addEventListener("click", buttonFunction);

function buttonFunction() {
    document.getElementById("feedback").innerHTML = "<p>Mitä tietoa etsit sivulta? Vastaamalla autat meitä kehittämään sivustoamme! <p> <input type='text' id='feedbackText'> <button onclick='sendmsg()' id='sendButton'>Lähetä</button>"
    
};



function sendmsg() {
    alert("Viestisi on lähetetty onnistuneesti!")
    document.getElementById("feedback").innerHTML = "";
    
}
