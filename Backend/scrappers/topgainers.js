
const request =require('request-promise');
const cheerio =require('cheerio');
const TopGainers = require('../schema/TopGainers');
const mongoose = require('mongoose');

//Scraping Songs
async function scrapgainers(){

  const url='https://www.hdfcsec.com/market/equity/top-gainer-nse';
        const html= await request.get(url);
        const $=await cheerio.load(html);
  $(".companyList").each(async (index,element)=>{
  try{

        //grabbing the song details
        const gainername=$(element)
        .children('div')
        .children('div')
        .children('a')
        .children('span')
        .text().trim();


        const gainerchange=$(element)
        .children('div.row')
        .children('div.companyDetail')
        .children('div.row')
        .children('div.col-md-4')
        .children('span.text-green')
        .text().trim();

        //creating the model's object
            const gainers = new TopGainers({
                gainername: gainername,
                gainerchange: gainerchange
            })
            await gainers.save();
            console.log(gainers);
}
  catch(err){
    console.log(err);
  }
  })
}


module.exports.scrapgainers= scrapgainers;

