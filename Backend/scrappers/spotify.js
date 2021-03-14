const request = require("request-promise");
const cheerio = require("cheerio");
const Songs = require("../schema/Songs");
const mongoose = require("mongoose");

//Scraping Songs
async function scrapsongs() {
  const indiansongsUrl = "https://spotifycharts.com/regional/in/daily/latest";
  const globalsongsUrl =
    "https://spotifycharts.com/regional/global/daily/latest";
  const regionalsongflag = null;
  const urlToScrap = regionalsongflag ? indiansongsUrl : globalsongsUrl;
  const html = await request.get(urlToScrap);
  const $ = await cheerio.load(html);
  $("tr").each(async (index, element) => {
    try {
      //grabbing the song details
      const songName = $(element)
        .children(".chart-table-track")
        .children("strong")
        .text()
        .trim();
      const songArtist = $(element)
        .children(".chart-table-track")
        .children("span")
        .text()
        .trim();
      const songLink = $(element)
        .children(".chart-table-image")
        .children("a")
        .attr("href")
        .trim();

      const song = { songName, songArtist, songLink };

      //creating the model's object
      const songs = new Songs({
        songName: songName,
        songArtist: songArtist,
        songLink: songLink,
      });
      await songs.save();
      console.log(songs);
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports.scrapsongs = scrapsongs;
