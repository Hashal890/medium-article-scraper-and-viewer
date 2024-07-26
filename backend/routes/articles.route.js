const express = require("express");
const Article = require("../model/articles.model");

const articlesRouter = express.Router();

articlesRouter.get("/", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json({ message: "Articles found!", articles });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve articles", error });
  }
});

module.exports = articlesRouter;
