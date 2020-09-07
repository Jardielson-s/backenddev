const { index } = require("../utils/pointSchem");

const Dev=require("../Model/model");
const parse=require("../utils/parsestringtoArray");
module.exports={
    async index(req,res){
        const {techs}=req.query;

    const techsArray=parse(techs);
    const devs=await Dev.find({
        techs:{
            $in:techsArray,
        }
    });
    return res.json({devs});
    }
}