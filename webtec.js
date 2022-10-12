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


// Create connection BETWEEN THIS NODEJS AND SQL
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'join_us',
    password : 'universe@2K'
});

app.get("/home", function(req, res){
    var q = 'SELECT COUNT(email) as count FROM users';
    connection.query(q, function (err, results) {
         if (err) throw err;
         var count = results[0].count;
                  res.render("home",{ data: count});
    });
 });

 app.post("/register",function(req,res)
{
    var person={email :req.body.email}
    var agy={age :req.body.age}
    connection.query('INSERT INTO users SET?',person,function(err,result)
    {
        connection.query('INSERT INTO users SET?',age,function(err,result)
    {
        
        if(err) throw err;
    });      
        if(err) throw err;
        //TO REDIRECT TO HOME ACTION i.e what hapens when you visit the page home
    }); 
    res.redirect("question1");            
});
 
app.get("/question1", function(req, res){

    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (err, results) {
         if (err) throw err;
         var count = results[0].count;
                  res.render("joke",{ data: count});
    });
 });
 app.post("/response",function(req,res)
{
    var person ={answer :req.body.email};
    connection.query('INSERT INTO game SET?',person,function(err,result)
    {
if(err) throw err;
res.redirect("question2");

 });
});

  
app.get("/question2", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (err, results) {
         if (err) throw err;
         var count = results[0].count;
                  res.render("joke2",{ data: count});
    });
 });
 app.post("/response2",function(req,res)
{
    var person ={answer :req.body.email};
        connection.query('INSERT INTO game SET?',person,function(err,result)
        {
if(err) throw err;
res.redirect("question3");
//TO REDIRECT TO HOME ACTION i.e what hapens when you visit the page home
        });
});
  
 app.get("/question3", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (err, results) {
         if (err) throw err;
         var count = results[0].count;
                  res.render("joke3",{ data: count});
    });
 });
 
app.post("/response3",function(req,res)
{
    var person ={answer :req.body.email};
        connection.query('INSERT INTO game SET?',person,function(err,result)
        {
if(err) throw err;
res.redirect("question4");
//TO REDIRECT TO HOME ACTION i.e what hapens when you visit the page home
        });
});

 app.get("/question4", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (err, results) {
         if (err) throw err;
         var count = results[0].count;
                  res.render("joke4",{ data: count});
    });
 });

app.post("/response4",function(req,res)
{
    var person ={answer :req.body.email};
        connection.query('INSERT INTO game SET?',person,function(err,result)
        {
if(err) throw err;
res.redirect("tq");
//TO REDIRECT TO HOME ACTION i.e what hapens when you visit the page home
        });
});




 app.get("/tq", function(req, res){
    var q = 'SELECT  email as count from users order by created_at desc limit 1';
    connection.query(q, function (err, results) {
         if (err) throw err;
         var count = results[0].count;
                  res.render("tq",{ data: count});
    });
 });

app.listen('3000',function() {
    console.log('Server started on port 3000');
});
