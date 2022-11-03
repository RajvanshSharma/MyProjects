const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmiCalulator" , function(req , res){
    let ht = req.body.height - '0';
    let wt = req.body.weight - '0';
    let bmi  = wt/(ht*ht);
    res.send("Your bmi is " + bmi);
});

app.listen(3000, function(){
    console.log("server started");
});