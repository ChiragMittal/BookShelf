const express    = require('express');
const morgan     = require("morgan");
const app        = express();
// var data = require( "./js/data.json");
const bodyParser = require('body-parser');
const config = require('./configuration');
const axios = require('axios');

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    next();
});

const port = process.env.PORT || 5000;

app.use(morgan("dev"));
// app.use(express.static("./"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", express.json(), async (req, res) => {
    //const { query, field } = req.body;
    const query = "Dan Brown";
    const  field = "Author";
    const encodedQuery = encodeURIComponent(query);
    const maxResults = 20;
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

app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});