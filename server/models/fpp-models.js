const mongoose = require('mongoose')

const User= new mongoose.Schema(
    {
        name:{type: String, required:true},
        age:{type: String, required:true},
        email: {type: String, required:true},
        gender: {type: String, required:true},
        username: {type: String, required:true,unique:true},
        password: {type: String, required:true}
    },
    {collection:'User'}
)

const model=mongoose.model('UserData',User)
module.exports=model