//importing libraries
const request = require('request-promise');
const cheerio = require('cheerio');
const Games = require('../schema/Games');
const mongoose = require('mongoose');

//scraping games
async function scrapgames() {

    const gamesUrl = 'https://steamcharts.com/top';
    const html = await request.get(gamesUrl);
    const $ = await cheerio.load(html);

    $("tr").each(async (index, element) => {
        try {

            //grabbing the game details from webpage
            const gameName = $(element).children('.game-name').children('a').text().trim();
            const currentGamePlayers = $(element).children('.peak-concurrent').text().trim();
            const game = {
                gameName,
                currentGamePlayers
            };

            //creating the model's object
            const games = new Games({
                gameName: gameName,
                currentGamePlayers: currentGamePlayers
            })
            await games.save();
            console.log(games);
        } catch (err) {
            console.log(err);
        }
    });
}

//delete all collections of Games model
async function deleteall(){
  try{
  await Games.deleteMany({});
  console.log('deletion done...')
  }
  catch(err)
  {
    console.log('deleting failed..')
  }
}

module.exports.scrapgames= scrapgames;
module.exports.deleteall= deleteall;