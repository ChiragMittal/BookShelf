const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  volumeID: {
    type: String,
    required: true,
    unique: true
  },
  authors: {
    type: [String],
    required: true,
    validate: [
      function() {
        return this.authors.length > 0;
      },
    ]
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ""
  },
  pageCount: {
    type: Number,
    min: 1,
    default: null
  },
  identifiers: {
    type: [{}]
  },
  thumbnailLink: {
    type: String,
    required: true
  },
  shelfStatus: {
    type: String,
    enum: ["Read", "Currently Reading", "Want to Read"],
    required: true
  },
  price:{
      amount: Number,
      currency_code: String ,
      
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };