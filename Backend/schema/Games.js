const mongoose=require('mongoose');

const Games=mongoose.model(
'Games',mongoose.Schema({
 gameName:{ type : String, required : true },
 currentGamePlayers:{ type : String, required : true },
})
)
module.exports=Games;