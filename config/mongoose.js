const mongoose=require('mongoose');
let db;
async function main(){
   db=await mongoose.connect('mongodb://127.0.0.1:27017/PollingAPI');
   console.log("Database Connected successfully");
}
 main().catch((error)=>{
    console.log("Error while Connecting Database : "+ error);
 })

 module.exports=db;

