const puppeteer = require("puppeteer");

const scrapeMediumArticles = async (topic) => {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath:
        process.env.PUPPETEER_EXECUTABLE_PATH,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(`https://medium.com/search?q=${topic}`, {
      waitUntil: "networkidle2",
    });
    const articles = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("article"))
        .slice(0, 5)
        .map((article) => {
          let title = article.querySelector("h2")?.innerText;
          let author = article.querySelector("p")?.innerText;
          let desc = article.querySelector("h3")?.innerText;
          let date = article
            .querySelector("div > div > span")
            ?.innerText.split("\n")[0];
          let url = article.querySelector("div.h.k.j.i.d > div > a")?.href;
          return { title, author, desc, date, url };
        });
    });
    return articles;
  } catch (error) {
    console.error("Error scraping Medium:", error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

module.exports = scrapeMediumArticles;
