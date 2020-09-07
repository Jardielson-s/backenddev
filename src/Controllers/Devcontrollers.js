const axios=require("axios");
const Dev=require("../Model/model");
const pointSchema = require("../utils/pointSchem");
const parse=require("../utils/parsestringtoArray");


module.exports={
    async index(req,res){
      const dev=await Dev.find();
       
      return res.json({dev});

    },

    async store(req,res){
        try{
            const {github_username,techs,latitude,longitude}=req.body;
            
            
            const apiRes=await axios.get(`https://api.github.com/users/${github_username}`);
            const {name=login,avatar_url,bio}=apiRes.data;
            
            const techsarray=parse(techs);
            const location={
                type:'Point',
                coordinates:[longitude,latitude],
            };
            
            
            let dev =await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techsarray,
                location
            });
    
          return res.json({dev});
        
    
      

    }catch(err){
        return res.json({message:err});
    }
    
    }
    

};