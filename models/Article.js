const mongoose = require("mongoose"); //require mongoose package
require('../connection/db.connection');

// const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

// const commentSchema = new mongoose.Schema({
//     body: String,
//     commentDate: Date
// })

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
  author: { type: String, required: true },
  body: String,
  comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
  publishDate: { type: Date, default: Date.now }, // can set defaults for properties
  hidden: {type: Boolean, default: false},
  meta: {
    // can have properties that are objects
    votes: Number,
    favs: Number,
  },
});

//Creating an Article class -- will be stored in 'articles' collection.  Mongo does this for you automatically
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;