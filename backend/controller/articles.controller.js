const Article = require("../model/articles.model");

const saveArticlesInDatabase = async (articles) => {
  await Article.deleteMany({});
  return Article.insertMany(articles);
};

module.exports = saveArticlesInDatabase;
