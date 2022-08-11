const mongoose = require('mongoose')

const Articles= new mongoose.Schema(
    {
        author:{type: String, required:true},
        date:{type:Date, required:true},
        title:{type: String , required:true},
        content:{type: String, required:true},
        reaction:{type:{user: {type: String},reaction:{type:String}}}
    },
    {collection:'Articles'}
)

const model=mongoose.model('ArticleData',Articles)
module.exports=model