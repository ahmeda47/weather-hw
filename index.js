$(".city-search").on("click", function(){
    event.preventDefault()

    var input = $("#city-input").val();
    localStorage.setItem("test", input)  

    var getInput = localStorage.getItem("test")
    $("#city-input").value = getInput

    var APIKey = "78e91f7426f5c8ebd2e56a85df9d8f3c";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + getInput + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        $("#city-name").text(response.name)
        var tempF = Math.floor(response.main.temp - 273.15);
        $("#temp").text("Temperature: " + tempF + " °C")
        $("#hum").text("Humidity: " + response.main.humidity + "%")
        $("#wind").text("Wind Speed: " + response.wind.speed + " MPH")
    });

});