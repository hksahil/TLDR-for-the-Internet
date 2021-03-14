const mongoose=require('mongoose');

const TwitterTrends=mongoose.model(
'TwitterTrends',mongoose.Schema({
 trendName:{ type : String, required : true },
 trendNumbers:{ type : String, required : true },
})
)
module.exports=TwitterTrends;