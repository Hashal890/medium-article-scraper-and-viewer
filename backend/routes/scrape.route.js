const express = require("express");
const saveArticlesInDatabase = require("../controller/articles.controller");
const scrapeMediumArticles = require("../controller/scrape.controller");

const scrapeRouter = express.Router();

scrapeRouter.post("/", async (req, res) => {
  const { topic } = req.body;
  try {
    const articles = await scrapeMediumArticles(topic);
    await saveArticlesInDatabase(articles);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve articles", error });
  }
});

module.exports = scrapeRouter;
