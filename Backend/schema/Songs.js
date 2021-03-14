const mongoose=require('mongoose');

const Songs=mongoose.model(
'Songs',mongoose.Schema({
 songName:{ type : String, required : true },
 songArtist:{ type : String, required : true },
 songLink:{ type : String, required : true }
})
)
module.exports=Songs;