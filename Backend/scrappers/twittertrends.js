const request = require("request-promise");
const cheerio = require("cheerio");
const TwitterTrends = require("../schema/TwitterTrends");
const mongoose = require("mongoose");

//Scraping twitter trends
async function scraptrends() {
  const trendsUrl = "https://twitter-trends.iamrohit.in/india";
  const html = await request.get(trendsUrl);
  const $ = await cheerio.load(html);

  $("tr").each(async (index, element) => {
    try {
      //grabbing the trend details
      const trendName = $(element).find("a").text().trim();
      const trendNumbers = $(element).find("th.sml").text().trim();
      const trend = { trendName, trendNumbers };
    //   creating the model's object
      const twitterTrends = new TwitterTrends({
        trendName: trendName,
        trendNumbers: trendNumbers,
      });
      await twitterTrends.save();
      console.log(twitterTrends);
    } catch (err) {
      console.log(err);
    }
  });
}


module.exports.scraptrends = scraptrends;
