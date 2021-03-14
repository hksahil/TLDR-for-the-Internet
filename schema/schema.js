const mongoose=require('mongoose');

const Songs=mongoose.model(
'Songs',mongoose.schema({
 title:{ type : String, required : true }
})
)
moodule.exports=Songs;