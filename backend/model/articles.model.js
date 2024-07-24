const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  url: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
