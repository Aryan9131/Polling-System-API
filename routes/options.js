const express=require('express');
const router=express.Router();
const optionController=require('../controllers/optionController')

router.delete('/:id/delete',optionController.deleteOpt);
router.get('/:id/add_vote', optionController.addVote);
module.exports=router;
