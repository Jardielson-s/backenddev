const express=require("express");
const router=require("./routes");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();

mongoose.connect("mongodb+srv://jardielson:jardielson@cluster0-gqe6d.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(cors());
app.use(express.json());
app.use(router);



app.listen(8080);