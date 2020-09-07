const {Router}=require("express");
const DevController=require("./Controllers/Devcontrollers");
const search=require("./Controllers/searchdev");
const axios =require("axios");

const routes=Router();

routes.get("/listall",DevController.index);
routes.get("/sarch",search.index);
routes.post("/devs",DevController.store);


module.exports=routes;