const express    = require('express');
const morgan     = require("morgan");
const app        = express();
// var data = require( "./js/data.json");
const bodyParser = require('body-parser');
const config = require('./configuration');
const axios = require('axios');
const path = require("path");
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    next();
});

const port =  8000;
// const publicPath = path.join(__dirname,"../index.html");
// console.log(publicPath);
app.use(morgan("dev"));
// app.use(express.static("./"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public')) ;



app.post("/search", express.json(), async (req, res) => {
    const { query, field } = req.body;
    
    const encodedQuery = encodeURIComponent(query);
    const maxResults = 20;
    console.log(query)
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${field}:${encodedQuery}&key=${config.google.key
      }&maxResults=${maxResults}`;
      console.log(url)
      const { data } = await axios.get(url);
      res.send(data.items);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  app.get("*",(req, res) => {
    res.sendFile(express.static(path.join(__dirname,"../index.html")));
    
  });

app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});