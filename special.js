var express = require('express');
var app = express();
var mysql =require('mysql');
var bodyparser = require('body-parser');


//ABOVE ARE FOR SETTING MODULES FOR THIS CODE like conenct to express msql
app.set("view engine", "ejs");
//TO SET APP SETTINGS
app.use(bodyparser.urlencoded({extended: true}));
// TO KNOW WHO IS CONTACTING YOU CAN BE SEEN IN TEMINAL AFTER SERVER SETS
app.use(express.static(__dirname + "/style"));
// FOR ENABLING STYLE YOU DID IN CSS FILE, ALSO YOU NEED TO TYPE href="/file you created for styling "in ejs file 
//here it is home.ejs and app.css file

app.get("/birthday",function(req,res)
{
    

res.render("mummy");


});

app.listen('3000',function() {
    console.log('Server started on port 3000');
});