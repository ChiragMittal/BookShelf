const { User } = require("../modals/user");
const jwt = require("jsonwebtoken");
const config = require('../configuration');

const authenticate = async (req, res, next) => {
    var LocalStorage = require('node-localstorage').LocalStorage,
                       localStorage = new LocalStorage('./scratch');
                     var token= localStorage.getItem("token");
                    // console.log(localStorage.getItem("token"))
 //console.log(token);
 decoded = jwt.verify(token, config.jwt.key);
 
  try {
    
    const user = await User.find({username:decoded.payload.username});
    if (!user) {
      throw new Error();
    }
    
    res.locals.user = user;
    res.locals.token = token;
    console.log(res.locals.user[0])
    next();
  } catch (e) {
    res.status(401).send();
  }
};

module.exports = { authenticate };