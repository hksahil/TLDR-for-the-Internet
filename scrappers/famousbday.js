const request =require('request-promise');
const cheerio =require('cheerio');
const FamousPerson = require('../schema/FamousPerson');
const mongoose = require('mongoose');

//Scraping famous birthdays
async function scrapbirthday(){

  const bdayUrl='https://www.bornglorious.com/india/birthday/?pd=today';

 const html= await request.get(bdayUrl);
        const $=await cheerio.load(html);

  $(".panel-primary").each(async (index,element)=>{
  try{


        // //grabbing the famous personalities
        const personName=$(element).children('.panel-heading').find('b').text().trim();
        const personProfession=$(element).children('.panel-footer').text().trim();
        const person={personName,personProfession};
       //creating the model's object
            const famousperson = new FamousPerson({
                personName: personName,
                personProfession: personProfession
            })
            await famousperson.save();
            console.log(famousperson);
        } catch (err) {
            console.log(err);
        }
    });
}


module.exports.scrapbirthday= scrapbirthday;