const express = require("express");
const app = express();

app.get("/" , function(req, res){
    res.send("hi");
});

app.get("/about" , function(req, res){
    res.send("my name is l");
});

app.listen(4000, function(){
console.log("server started");
});
