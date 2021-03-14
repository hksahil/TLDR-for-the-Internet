const mongoose=require('mongoose');

const Github=mongoose.model(
'Github',mongoose.Schema({
 reponame:{ type : String, required : true },
 repolink:{ type : String, required : true },
 repodescription:{ type : String, required : true },
 repolanguage:{ type : String, required : true }
})
)
module.exports=Github;
