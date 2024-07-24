const puppeteer = require("puppeteer");

const scrapeMediumArticles = async (topic) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://medium.com/search?q=${topic}`, {
    waitUntil: "networkidle2",
  });
  const articles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("article"))
      .slice(0, 5)
      .map((article) => {
        let title = article.querySelector("h2").innerText;
        let author = article.querySelector("p").innerText;
        let desc = article.querySelector("h3").innerText;
        let date = article.querySelector("div > span").innerText;
        date = date.split(`\n`)[0];
        let url = article.querySelector("a").href;
        return { title, author, desc, date, url };
      });
  });
  await browser.close();
  return articles;
};

module.exports = scrapeMediumArticles;
