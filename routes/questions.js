const express=require('express');
const router=express.Router();
const questionController=require('../controllers/questionController');
const optionController=require('../controllers/optionController');

router.get('/', questionController.findAll);
router.post('/create',questionController.createQues);
router.post('/:id/options/create',optionController.createOpt);
router.get('/:id',questionController.findQues);
router.delete('/:id/delete', questionController.deleteQues);
module.exports=router;
