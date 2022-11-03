const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const city = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c5c81f7897ec94874d49f5e9ce685163&units=metric";
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const descp = weatherData.weather[0].description;
            res.write("<h1>The temperature is " + temp + " degrees celcius</h1>");
            res.write("There is " + descp);
            res.send();
        });
    });


});




app.listen(3000, function(){
    console.log("server started");
});