const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();



app.listen(process.env.PORT || 3000, function(){
    console.log("The server is started on port 3000");
});


app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {

res.sendFile(__dirname+"/index.html");


});

