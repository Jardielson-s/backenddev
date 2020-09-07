const mongoose=require("mongoose");
const poinSchema=require("../utils/pointSchem");
const pointSchema = require("../utils/pointSchem");

const devSchema=new mongoose.Schema({
name:String,
github_username:String,
bio:String,
avatar_url:String,
techs:[String],
location:{
    type:pointSchema,
    index:'2dsphere'
}
});

module.exports=mongoose.model("Dev",devSchema);