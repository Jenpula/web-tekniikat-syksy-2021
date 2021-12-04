document.querySelector("#navButton").addEventListener("click", newFunction);

function newFunction() {
    document.getElementById("textArea").innerHTML = " ";
    document.getElementById("text").innerHTML = "<h3>Tutustumaan palveluihimme pääset ottamalla yhteyttä puhelinnumeroomme, lähettämällä sähköpostia tai tulemaan paikanpäälle. <p>Tarjoamme ensimmäisen kerran ilmaiseksi.!</h3> Ota yhtettä puh: 0505503465 <p> Sähköp. hyväolo@gmail.com<p> Osoite: Jukolankuja 2 90350 Oulu<p>"

}
document.querySelector("#positive").addEventListener("click", function() {
    document.getElementById("feedback").innerHTML = "<p>Hienoa että löysit tarvitsemasi<p> Jaa sivu myös ystävillesi!"
});

document.querySelector("#negative").addEventListener("click", buttonFunction);
document.querySelector("#negative2").addEventListener("click", buttonFunction);

function buttonFunction() {
    document.getElementById("feedback").innerHTML = "<p>Mitä tietoa etsit sivulta? Vastaamalla autat meitä kehittämään sivustoamme! <p>  <input type='text'> <button id='sendButton'>Lähetä</button>"
};

