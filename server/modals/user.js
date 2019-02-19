const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const config = require('../configuration/index');

const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    tokens: [
      {
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }
    ],
    username: {
        type: String,
        required:true
    },
    resetPasswordToken: {
        type: String
    },
      resetPasswordExpires:{
        type : Date
      }
  });

  
      
    //   User.removeAuthToken = function(token) {
    //     const user = this;
    //     return user.update({
    //       $pull: {
    //         tokens: { token }
    //       }
    //     });
    //   };

 

const User = mongoose.model("User", UserSchema);

module.exports = { User };

User.createUser = function(newUser, callback){

	
    
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, function(err, hash) {
                newUser.password = hash;
                newUser.save(callback);
            });
        });
    
};

  
