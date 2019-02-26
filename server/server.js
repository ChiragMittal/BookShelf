const express    = require('express');
const morgan     = require("morgan");
const app        = express();
const helmet = require('helmet');
const _ = require("lodash");
// var data = require( "./js/data.json");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const config = require('./configuration');
const axios = require('axios');
const path = require("path");
const { localStorage } = require('node-localstorage/LocalStorage');
const { Book } = require("./modals/book");
var { User }= require('./modals/user');

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { authenticate } = require("./middleware/index");
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "x-auth");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,PATCH');
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

  app.post("/books", express.json(), authenticate, async (req, res) => {
    Book.find({
      _owner: res.locals.user[0]._id
  },function(err,existingBook){

      if(existingBook){
        var book = new Book({
          id: req.body.volumeID,
          identifiers: req.body.identifiers,
          title: req.body.title,
          authors: req.body.authors,
          description: req.body.description,
          pageCount: req.body.pageCount,
          thumbnailLink: req.body.thumbnailLink,
          shelfStatus: req.body.shelfStatus,
          _owner: res.locals.user[0]._id
        });
        console.log(book.id)

        book.save((err, doc) => {
            if (!err)
                res.status(200).send(doc);
            else {
                res.status(500).send(err)
                console.log(err)
            }

        })
          

      }
        
      else{
        return res.status(409).send({message : 'Owner does not exist'});
      }

      

  })
  });

  app.get("/books", authenticate ,async (req,res) =>{

    
    
    Book.find({_owner: res.locals.user[0]._id}).exec(function(err,result){
        if (err) res.status(500).send(error)
      console.log(result)
        res.send(result);
    })


});

app.get("/books/:id", authenticate, async (req, res) => {
  const id = req.params.id;
 
  try {
    const book = await Book.findOne({
      id: id,
      _owner: res.locals.user._id
    });
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (e) {
    res.status(400).send();
  }
});

app.patch("/books/:id", express.json(), authenticate, async (req, res) => {
  const id = req.params.id;
  const { shelfStatus } = _.pick(req.body, ["shelfStatus"]);

  
  try {
    const book = await Book.findOneAndUpdate(
      { id: id, _owner: res.locals.user[0]._id },
      { $set: { shelfStatus } }
    );
    console.log(book)
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (e) {
    res.status(400).send();
  }
});

app.delete("/books/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOneAndRemove({
      id: id,
    });
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (e) {
    res.status(400).send();
  }
});

app.post('/register', async (req, res) => {

//console.log(req.body.userData.username)
     User.findOne({
          email : req.body.userData.email,
          username : req.body.userData.username
     },function(err,existingUser){
 
         if(existingUser) {
             return res.status(409).send({message : 'User already exists'});
 
         }

                 else{
                  const payload = {
                    username: req.body.userData.username
                  };
                  const token = jwt.sign({ payload }, config.jwt.key).toString('hex');
                  //console.log(token)
                     var newUser = new User(
                     { username: req.body.userData.username,
                      email: req.body.userData.email,
                      password: req.body.userData.password,
                      tokens : {access: "auth",token:token}
                    }
                     );
                     User.createUser(newUser, function (err, user) {
                         if (err) throw err;
                         //console.log(user);
                     });
                     
                     //console.log(res.header("x-auth"))     
                     res.header("x-auth", token).send(newUser); 
                     var LocalStorage = require('node-localstorage').LocalStorage,
                       localStorage = new LocalStorage('./scratch');
                     var t= localStorage.setItem("token",token);
                     console.log(localStorage.getItem("token"))
                              
                 }
             });
             
             
     });   

app.post('/login',async(req,res) =>{
       //console.log(req.body.userData)
              User.findOne({email:req.body.userData.email}).exec(function(err,result){
          
                  console.log(result.password)
                     
                      bcrypt.compare(req.body.userData.password,result.password,function(err, callback){
                          if(callback){
                            const payload = {
                              username: result.username
                            };
                            const token = jwt.sign({ payload }, config.jwt.key).toString('hex');
                            
                            User.findOne({email:result.email}).exec(function(err,doc){
                                doc.tokens[0].token = token;
                                doc.save();
                                console.log(doc)
                                res.header("x-auth", token).send(doc);

                                var LocalStorage = require('node-localstorage').LocalStorage,
                              localStorage = new LocalStorage('./scratch');
                            var t= localStorage.setItem("token",token);
                           // console.log(localStorage.getItem("token"))
                            })
                            
                    //         
  
                              //res.redirect('/home');
                          }
                      })
                 })
  
  });
  
  app.delete("/logout", authenticate, async (req, res) => {
    console.log(res.locals.user[0])
    
    User.findOne({email:res.locals.user[0].email}).exec(function(err,doc){
      User.update({$pull :{"doc.tokens[0].token" :res.locals.token}}).exec(function(e,result){
        if(e){
          res.status(400).send();
        }
        console.log(result)
        res.status(200).send();
      })
      
    });
  
  });

  app.get("/:id",authenticate, async (req, res) =>{

    const { id } = req.params;
    console.log(id)
    User.findOne({_id:id}).exec(function(err,result){
      if(err){
        res.status(400).send();
      }
      console.log(result)
      res.status(200).send(result);
    })

  });

  app.get("*",(req, res) => {
    res.sendFile(express.static(path.join(__dirname,"../index.html")));
    
  });

app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});