const mongoose=require('mongoose');
let db;
async function main(){
   db=await mongoose.connect(`${DB}`);
   console.log("Database Connected successfully");
}
 main().catch((error)=>{
    console.log("Error while Connecting Database : "+ error);
 })

 module.exports=db;


