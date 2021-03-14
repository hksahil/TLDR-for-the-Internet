const mongoose=require('mongoose');

const Events=mongoose.model(
'Events',mongoose.Schema({
 eventName:{ type : String, required : true }
})
)
module.exports=Events;