//importing libraries
const request = require("request-promise");
const cheerio = require("cheerio");
const path=require('path');
require('dotenv').config();
console.log(process.env,"my enviroment varaibles hain ye");
const scrapperfile = require("./scrapper");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schedule = require('node-schedule');


//REST API demo in Node.js
var express = require("express"); // require the express framework
var app = express();
var cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("port", process.env.PORT || 8000);
var port = app.get("port");

// Middlewares
// Parse incoming requests data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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

//Connecting to database(mongodb)
(async function connectmongo() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.iiimv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  console.log("connected to db...");
})();


//Backup
// This function runs the mainscrapper() that is in scrapper.js file (that function is actually doing the scrapping function)
// async function scrap(){
//  await scrapperfile.mainscrapper();
// }
// scrap();

// Scheduling test starts
const job = schedule.scheduleJob('0 */8 * * *', function(){
 async function scrap(){
 await scrapperfile.mainscrapper();
}
console.log(`scrapper last ran at ${new Date().toLocaleString()}`);
});


// app.get("/", function (req, res, next) {
//   res.send("homepage");
// });


//This is API endpoint you have created and is returning json data
app.get("/songs", function (req, res, next) {
  Songs.find()
    .skip(1)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

app.get("/songsIndian", function (req, res, next) {
  SongsIndian.find()
    .skip(1)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

//Get events
app.get("/events", function (req, res, next) {
  Events.find()
    .skip(1)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

//Get games
app.get("/games", function (req, res, next) {
  Games.find()
    .skip(2)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

app.get("/github", function (req, res, next) {
  Github.find()
    .skip(1)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

//Get specific language repos
app.get("/github/:repolanguage", function (req, res, next) {
  Github.find({
    repolanguage: req.params.repolanguage,
  }).then(function (datacame) {
    return res.json(datacame);
  });
});

//Get twitter results
app.get("/twittertrends", function (req, res, next) {
  TwitterTrends.find()
    .skip(1)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

//Get famous bday
app.get("/famousperson", function (req, res, next) {
  FamousPerson.find()
    .skip(2)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

//Get topgainers
app.get("/topgainers", function (req, res, next) {
  TopGainers.find()
    .skip(0)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

//Get toploosers
app.get("/toploosers", function (req, res, next) {
  TopLoosers.find()
    .skip(2)
    .limit(3)
    .then(function (datacame) {
      return res.json(datacame);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});






if(process.env.NODE_ENV==="production")
{
  //gives express application access to that folder
app.use(express.static(path.join(__dirname,'/Frontend/front-end/build')))
//index.html is the main entry point to our frontend application
app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'Frontend','front-end','build','index.html'))
})
} else{
app.get('/',(req,res)=>{
  res.send('API Running');
})
}







// Create a server to listen at port 8080
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("REST API demo app listening ", host, port);
});
