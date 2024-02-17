const express=require('express');
const router=express.Router();

router.get('/', function(req, res){
    console.log("Namaskar")
    return res.status(200).json({
        message:"Hello-1"
    });
})

router.use('/questions', require('./questions'));


module.exports=router;