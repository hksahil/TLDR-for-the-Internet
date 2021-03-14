//importing libraries
const request = require("request-promise");
const cheerio = require("cheerio");


// require('dotenv').config();

const mongoose = require("mongoose");
const deletecollection = require("./deletecollections");

// This returns module object with the functions from module's file.
const games = require("./scrappers/games");
const events = require("./scrappers/historyevents");
const songs = require("./scrappers/spotify");
const songsIndians = require("./scrappers/songsIndian");
const trends = require("./scrappers/twittertrends");
const famousbday = require("./scrappers/Famousbday");
const github = require("./scrappers/github");
const topgainers = require("./scrappers/topgainers");
const toploosers = require("./scrappers/toploosers");

//importing schema files
const Games = require("./schema/Games");
const Songs = require("./schema/Songs");
const SongsIndian = require("./schema/SongsIndian");
const TwitterTrends = require("./schema/TwitterTrends");
const Events = require("./schema/Events");
const FamousPerson = require("./schema/FamousPerson");
const Github = require("./schema/Github");
const TopGainers = require("./schema/TopGainers");
const TopLoosers = require("./schema/TopLoosers");

//connecting to database(mongodb)
async function connectmongo() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.iiimv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  console.log("connected to db...");
}

async function mainscrapper() {
  await connectmongo();

  await deletecollection.deleteall(Games);
  await games.scrapgames();

  await deletecollection.deleteall(Events);
  await events.scraphistoryevents();

  await deletecollection.deleteall(Songs);
  await songs.scrapsongs();

  await deletecollection.deleteall(SongsIndian);
  await songsIndians.scrapIndiansongs();

  await deletecollection.deleteall(TwitterTrends);
  await trends.scraptrends();

  await deletecollection.deleteall(FamousPerson);
  await famousbday.scrapbirthday();

  await deletecollection.deleteall(Github);
  await github.scraprepos();
  await github.scrapreposutils('java');
  await github.scrapreposutils('C');
  await github.scrapreposutils('Python');
  await github.scrapreposutils('Go');


  await deletecollection.deleteall(TopGainers);
  await topgainers.scrapgainers();

  await deletecollection.deleteall(TopLoosers);
  await toploosers.scraploosers();
}

// mainscrapper();

module.exports.mainscrapper= mainscrapper;