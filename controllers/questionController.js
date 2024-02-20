const Question=require('../models/question');
const Option=require('../models/option');
module.exports.createQues=async function(req, res){
    try {
        const newQues=new Question(req.body);
        await newQues.save();
        return res.status(200).json({
          message: "Question Created Successfully !",
          Question : newQues
      })
    } catch (error) {
       console.log(`Error while creating Question : ${error}`);
       return res.status(404).json({
        message: "Error while creating Question !",
       })
    }
}

module.exports.deleteQues=async function(req, res){
   const delQues=await Question.deleteOne({_id: req.params.id});
   const delOpts=await Option.deleteMany({ques_id :req.params.id});
   return res.status(200).json({
      message : "Question and related options are deleted !"
   })
}

module.exports.findQues=async function(req, res){
   try {
    const question=await Question.findOne({_id : req.params.id}).populate({
      path :'options',
    });
    return res.status(200).json({
       question : question
    })
   } catch (error) {
    console.log(error);
    return res.status(404).json({
      message : "Error while finding Question",
      errorMessage : error
   })
   }
}
