const express = require("express");
const saveArticlesInDatabase = require("../controller/articles.controller");
const scrapeMediumArticles = require("../controller/scrape.controller");

const scrapeRouter = express.Router();

scrapeRouter.post("/", async (req, res) => {
  const { topic } = req.body;
  try {
    if (!topic || typeof topic !== "string" || topic.trim() === "") {
      return res.status(400).json({ message: "Invalid topic" });
    }
    const articles = await scrapeMediumArticles(topic);
    await saveArticlesInDatabase(articles);
    res.json({ message: "Articles found!", articles });
  } catch (error) {
    console.error("Failed to retrieve articles:", error);
    res
      .status(500)
      .json({ message: "Failed to retrieve articles", error: error.message });
  }
});

module.exports = scrapeRouter;
