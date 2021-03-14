const mongoose=require('mongoose');

const TopGainers=mongoose.model(
'TopGainers',mongoose.Schema({
 gainername:{ type : String, required : true },
 gainerchange:{ type : String, required : true },
})
)
module.exports=TopGainers;