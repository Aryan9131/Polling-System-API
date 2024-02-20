const express=require('express');
const app=express();
const PORT=process.env.PORT || 8000;
const db=require('./config/mongoose');
app.use(express.urlencoded());

app.use('/',require('./routes'));


app.listen(PORT, function(error){
    if(error){
        console.log(`Error while running server : ${error}`);
    }else{
        console.log(`server is running at ${PORT}`);
    }
})