const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongooseConnect = require("./config/db.config");
const scrapeRouter = require("./routes/scrape.route");
const articlesRouter = require("./routes/articles.route");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to medium article scraper and viewer backend",
  });
});

app.use("/scrape", scrapeRouter);
app.use("/articles", articlesRouter);

app.listen(PORT, async () => {
  await mongooseConnect();
  console.log(`Server is running on port ${PORT}`);
});
