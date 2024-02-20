const mongoose=require('mongoose');
require('dotenv').config() ;
let db;
async function main(){
  
   db=await mongoose.connect(process.env.DB);
   console.log("Database Connected successfully");
}
 main().catch((error)=>{
   console.log(process.env.DB)
    console.log("Error while Connecting Database : "+ error);
 })

 module.exports=db;


