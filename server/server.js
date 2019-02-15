const express    = require('express');
const morgan     = require("morgan");
const app        = express();
const helmet = require('helmet');
// var data = require( "./js/data.json");
const bodyParser = require('body-parser');
const config = require('./configuration');
const axios = require('axios');
const path = require("path");
const { Book } = require("./modals/book");
const mongoose = require("mongoose");
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    next();
});

mongoose.connect("mongodb://localhost:27017/books",(err,db) => {
    if(!err){
        console.log("we r connected");

    
    }
});

const port =  3000;
// const publicPath = path.join(__dirname,"../index.html");
// console.log(publicPath);
app.use(morgan("dev"));
// app.use(express.static("./"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
//app.use(express.static('public')) ;



app.post("/search", express.json(), async (req, res) => {
    const { query, field } = req.body;
    
    const encodedQuery = encodeURIComponent(query);
    const maxResults = 30;
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

  app.post("/books", express.json(), async (req, res) => {
    Book.findOne({
      id : req.body.volumeID
  },function(err,existingBook){

      if(existingBook){
          return res.status(409).send({message : 'Book already exists'});

      }
        
      else{
          var book = new Book({
            id: req.body.volumeID,
            identifiers: req.body.identifiers,
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            pageCount: req.body.pageCount,
            thumbnailLink: req.body.thumbnailLink,
            shelfStatus: req.body.shelfStatus
          });
          console.log(book)

          book.save((err, doc) => {
              if (!err)
                  res.status(200).send(doc);
              else {
                  res.status(500).send(err)
              }

          })
      }

      

  })
  });

  app.get("/books", async (req,res) =>{

    
    
    Book.find({}).exec(function(err,result){
        if (err) res.status(500).send(error)

        res.json(result);
    })


});

  app.get("*",(req, res) => {
    res.sendFile(express.static(path.join(__dirname,"../index.html")));
    
  });

app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});