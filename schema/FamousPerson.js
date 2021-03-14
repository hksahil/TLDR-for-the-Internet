const mongoose=require('mongoose');

const FamousPerson=mongoose.model(
'FamousPerson',mongoose.Schema({
 personName:{ type : String, required : true },
 personProfession:{ type : String, required : true },
})
)
module.exports=FamousPerson;