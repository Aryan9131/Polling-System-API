const Question = require('../models/question');
const Option = require('../models/option');

module.exports.createOpt = async function (req, res) {
    const question = await Question.findOne({ _id: req.params.id });
    const newOption = new Option({
        text: req.body.text,
        ques_id: req.params.id,
    })
    newOption.link_to_vote=`${process.env.BASE_URL}/${newOption.id}/add_vote`
    await newOption.save();
    question.options.push(newOption.id);
    await question.save();
    return res.status(200).json({
        message: "option created",
        option: newOption
    })
}

module.exports.deleteOpt = async function (req, res) {
    try {
        const opt = await Option.findOne({ _id: req.params.id });
       const delOpt= await Option.deleteOne({_id :req.params.id});
       const updated = await Question.findByIdAndUpdate(opt.question,{ $pull: { options: req.params.id } },
            { new: true } // To get the updated document
        );
        return res.status(200).json({
            message: "option deleted",
            option : delOpt
        })
    } catch (error) {
        return res.status(404).json({
            message: " Error  while deleting Option",
            error : error
        })
    }
}

module.exports.addVote=async function(req, res){
    const opt=await Option.findOne({_id : req.params.id});
    opt.votes++;
    await opt.save();
    return res.redirect('back');
}