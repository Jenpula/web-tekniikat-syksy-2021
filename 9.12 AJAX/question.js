// Tehty http requesti
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/",true);
// lähetetty requesti
xmlhttp.send();

// luodaan event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
        let answerObject = JSON.parse(xmlhttp.response);
        
        document.getElementById("answer").innerHTML= answerObject.answer;
        document.getElementById("image").setAttribute ("src", answerObject.image);
    }
  }
  
