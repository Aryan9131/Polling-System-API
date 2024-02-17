const express=require('express');
const router=express.Router();
const questionController=require('../controllers/questionController')
//router.get('/', )

router.get('/create',questionController.createQues);

//router.delete('/:id/delete',questionController.deleteQues);

module.exports=router;