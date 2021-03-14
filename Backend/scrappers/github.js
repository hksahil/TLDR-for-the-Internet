const request = require("request-promise");
const cheerio = require("cheerio");
const Github = require("../schema/Github");
const mongoose = require("mongoose");

//Scraping Github repos
async function scraprepos() {
  // const selectedlang = value;
  const githubUrl = "https://github.com/trending";
  // const specificUrl = `https://github.com/trending/${value}?since=daily`;
  // // const selectedlang='java';
{/* <span itemprop="programmingLanguage">JavaScript</span> */}
  // const urlToScrap = value ? specificUrl : githubUrl;
  const html = await request.get(githubUrl);
  const $ = await cheerio.load(html);
  $("article.Box-row").each(async (index, element) => {
    try {
      //grabbing the repo details
      const reponame = $(element)
        .children("h1")
        .children("a")
        .text()
        .replace(/\s/g, "");

        const repolanguage = $(element)
        .children("div.color-text-secondary")
        .children("span")
        .children("span[itemprop='programmingLanguage']")
        .text()
        .replace(/\s/g, "");


      const tempurl = $(element)
        .children("h1")
        .children("a")
        .attr("href")
        .trim();
      const repolink = "https://github.com" + tempurl;
      const repodescription = $(element).children("p").text().trim();

      //creating repo object
      const repo = { reponame, repolink, repodescription,repolanguage };
      // creating the model's object
      const githubrepo = new Github({
        reponame: reponame,
        repolink: repolink,
        repodescription: repodescription,
        repolanguage:repolanguage
      });
      await githubrepo.save();
      console.log(repo);
    } catch (err) {
      console.log(err);
    }
  });
}


async function scrapreposutils(value) {
  const githubUrl = `https://github.com/trending/${value}?since=daily`;
  const html = await request.get(githubUrl);
  const $ = await cheerio.load(html);
  $("article.Box-row").each(async (index, element) => {
    try {
      //grabbing the repo details
      const reponame = $(element)
        .children("h1")
        .children("a")
        .text()
        .replace(/\s/g, "");

        const repolanguage = $(element)
        .children("div.color-text-secondary")
        .children("span")
        .children("span[itemprop='programmingLanguage']")
        .text()
        .replace(/\s/g, "");


      const tempurl = $(element)
        .children("h1")
        .children("a")
        .attr("href")
        .trim();
      const repolink = "https://github.com" + tempurl;
      const repodescription = $(element).children("p").text().trim();

      //creating repo object
      const repo = { reponame, repolink, repodescription,repolanguage };
      // creating the model's object
      const githubrepo = new Github({
        reponame: reponame,
        repolink: repolink,
        repodescription: repodescription,
        repolanguage:repolanguage
      });
      await githubrepo.save();
      console.log(repo);
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports.scraprepos = scraprepos;
module.exports.scrapreposutils = scrapreposutils;
