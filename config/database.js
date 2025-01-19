const mongoose=require("mongoose");
require("dotenv").config;
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true,
    })
    .then(()=>console.log("Db connected Successfully"))
    .catch((error)=>{
        console.log("issue in db connection");
        console.log(error.message);
        process.exit(1);








    });

}
module.exports=dbconnect;