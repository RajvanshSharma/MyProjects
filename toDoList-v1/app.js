//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let day = new Date();
   res.render("list", {tasks: items , toDay: day});
});

app.post("/" , function(req, res){
    let task = req.body.task;
    items.push(task);
    res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
