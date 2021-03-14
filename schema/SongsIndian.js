const mongoose=require('mongoose');

const SongsIndian=mongoose.model(
'SongsIndian',mongoose.Schema({
 songIndianName:{ type : String, required : true },
 songIndianArtist:{ type : String, required : true },
 songIndianLink:{ type : String, required : true }
})
)
module.exports=SongsIndian;