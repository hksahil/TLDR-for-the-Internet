
const request =require('request-promise');
const cheerio =require('cheerio');
const SongsIndian = require('../schema/SongsIndian');
const mongoose = require('mongoose');

//Scraping Songs
async function scrapIndiansongs(){
  const urlToScrap ='https://spotifycharts.com/regional/in/daily/latest';
       const html= await request.get(urlToScrap);
        const $=await cheerio.load(html);
  $("tr").each(async (index,element)=>{
  try{

// .chart-table-track
        //grabbing the song details
        const songIndianName=$(element)
        .children(".chart-table-track")
        .children('strong').text().trim();


        const songIndianArtist=$(element)
        .children(".chart-table-track")
        .children('span').text().trim();


        const songLink=$(element)
        .children(".chart-table-image")
         .children("a")
        .attr("href")
        .trim();

        const song={songIndianName,songIndianArtist,songLink};


            console.log(song,"song");
  }
  catch(err){
    console.log(err);
  }
  })
}

scrapIndiansongs()