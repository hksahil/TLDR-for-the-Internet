

const request =require('request-promise');
const cheerio =require('cheerio');
const Events = require('../schema/Events');
const mongoose = require('mongoose');

//Scraping history events
async function scraphistoryevents() {

  const eventsurl='https://www.onthisday.com/countries/india';
   const html= await request.get(eventsurl);
        const $=await cheerio.load(html);
$(".event").each(async (index,element)=>{
  try{

        //grabbing the game details
        const eventName=$(element).text().trim();
        const event={eventName};

//creating the model's object
            const events = new Events({
                eventName: eventName,
            })
            await events.save();
            console.log(events);
        }catch (err) {
            console.log(err);
        }
    });
}

module.exports.scraphistoryevents= scraphistoryevents;


