const mongoose=require('mongoose');

const TopLoosers=mongoose.model(
'TopLoosers',mongoose.Schema({
 loosername:{ type : String, required : true },
 looserchange:{ type : String, required : true },
})
)

module.exports=TopLoosers;