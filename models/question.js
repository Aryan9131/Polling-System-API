const mongoose=require('mongoose');

const quesSchema=new mongoose.Schema({
    title :{
        type :String
    },
    options:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref :'Option'
        }
    ]
})

const Question=mongoose.model('Question' ,quesSchema);

module.exports=Question;