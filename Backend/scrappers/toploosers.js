
const request =require('request-promise');
const cheerio =require('cheerio');
const TopLoosers = require('../schema/TopLoosers');
const mongoose = require('mongoose');

//Scraping Songs
async function scraploosers(){

  const url='https://www.hdfcsec.com/market/equity/top-loser-nse';
        const html= await request.get(url);
        const $=await cheerio.load(html);
  $(".companyList").each(async (index,element)=>{
  try{


        //grabbing the song details
        const loosername=$(element)
        .children('div')
        .children('div')
        .children('a')
        .children('span')
        .text().trim();


        const looserchange=$(element)
        .children('div.row')
        .children('div.companyDetail')
        .children('div.row')
        .children('div.col-md-4')
        .children('span.text-red')
        .text().trim();

        const gainer={loosername,looserchange};

        //creating the model's object
            const loosers = new TopLoosers({
                loosername: loosername,
                looserchange: looserchange
            })
            await loosers.save();
            console.log(loosers);
}
  catch(err){
    console.log(err);
  }
  })
}


module.exports.scraploosers= scraploosers;

