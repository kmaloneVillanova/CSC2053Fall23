var getJoke = function() {
    var request = new XMLHttpRequest();
    request.open("GET",
    "https://official-joke-api.appspot.com/random_joke", true);
  
    /*This is the function we want called after the data is returned from
    the API server */
    request.onload = function() {
        var data = JSON.parse(this.response);
        var setup = data.setup;
        var punchline = data.punchline;
        document.getElementById("setup").textContent = setup;
        document.getElementById("punchline").textContent = punchline;
    }
    // send the request to the Joke API
    request.send();
}

var getJokes = function() {
    var request = new XMLHttpRequest();
    //use the endpoint programming/ten to get ten programming jokes
    request.open("GET", 
    "https://official-joke-api.appspot.com/jokes/programming/ten",true);
 
    request.onload = function() {
        //response is sent as a JSONArray
        var dataArray = JSON.parse(this.response);
        for(var i=0;i<dataArray.length;i++) {
            //each joke is an JSON element of the JSONArray
            var data = dataArray[i];
            var setup = data.setup;
            var punchline = data.punchline;
            //get the id for the setup and punchline
            document.getElementById("setup"+i).textContent = setup;
            document.getElementById("punchline"+i).textContent = punchline;
        }
    }
    request.send();
}