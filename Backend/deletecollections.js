//importing libraries
const request = require('request-promise');
const cheerio = require('cheerio');
const mongoose = require('mongoose');


//Defining all the schemas
const Games = require('./schema/Games');
const Songs = require('./schema/Songs');
const SongsIndian = require('./schema/SongsIndian');
const TwitterTrends = require('./schema/TwitterTrends');
const Events = require('./schema/Events');
const FamousPerson = require('./schema/FamousPerson');
const Github = require('./schema/Github');
const TopGainers = require('./schema/TopGainers');
const TopLoosers = require('./schema/TopLoosers');

//Delete all collections of Games model
async function deleteall(type){
  try{
  await type.deleteMany({});
  console.log('deletion done...')
  }
  catch(err)
  {
    console.log('deleting failed..')
  }
}

module.exports.deleteall= deleteall;