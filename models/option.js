const mongoose=require('mongoose');

const optSchema=new mongoose.Schema({
    text :{
        type : String
    },
    ques_id :{
        type : mongoose.SchemaTypes.ObjectId
    },
    votes:{
        type : Number,
        default:0
    },
    link_to_vote :{
        type: String
    }
})

const Option=mongoose.model('Option', optSchema);

module.exports=Option;