function get_joke_of_the_day() {

    let xhttp = new XMLHttpRequest();
  


    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
         let joke = JSON.parse(this.responseText);
         document.getElementById("answer").innerHTML = joke.contents.jokes[0].joke.text;
         document.getElementById("copyright").innerHTML = "&copy;" + joke.contents.copyright;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()


  
