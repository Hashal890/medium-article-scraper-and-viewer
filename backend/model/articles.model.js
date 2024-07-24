const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  url: String,
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
