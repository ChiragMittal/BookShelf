const express    = require('express');
const morgan     = require("morgan");
const app        = express();
const helmet = require('helmet');
// var data = require( "./js/data.json");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const config = require('./configuration');
const axios = require('axios');
const path = require("path");
const { localStorage } = require('node-localstorage/LocalStorage');
const { Book } = require("./modals/book");
var { User }= require('./modals/user');
const _ = require("lodash");
const mongoose = require("mongoose");
const { authenticate } = require("./middleware/index");
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "x-auth");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    next();
});

mongoose.connect("mongodb://localhost:27017/books",(err,db) => {
    if(!err){
        console.log("we r connected");

    
    }
});

// mongoose.connect("mongodb://localhost:27017/books_auth",(err,db) => {
//     if(!err){
//         console.log(" both connected");

    
//     }
// });

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

        res.send(result);
    })


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

// app.get("/register/me", authenticate, (req, res) => {
//   res.send(res.locals.user);
// });

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

     app.post('/login',(req,res) =>{
   
      // console.log(req.body.id)

      //const { email, password } = _.pick(req.body, ["email", "password"]);
  
      User.count({id:req.body.email}).exec(function(err,doc){
          if (err) res.status(500).send(error);
  
          
          if(doc>0){
              User.find({id:req.body.email}).exec(function(err,result){
          
                     
                      bcrypt.compare(req.body.password,result[0].password,function(err, callback){
                        
                     
                     
                          if(callback){
                            const token = User.generateAuthToken();
                            res.header("x-auth", token).send(result);
  
                              //res.redirect('/home');
                          }
                          else{
                              res.redirect('/login');
                          }
                      })
                  })
             
          }
  
              else{
                  res.redirect('/login');
                  
              }
  
          }
      )
  
  });
  
  // app.delete("/logout", authenticate, async (req, res) => {
  //   try {
  //     await res.locals.user.removeAuthToken(res.locals.token);
  //     res.status(200).send();
  //   } catch (e) {
  //     res.status(400).send();
  //   }
  // });

  app.get("*",(req, res) => {
    res.sendFile(express.static(path.join(__dirname,"../index.html")));
    
  });

app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});