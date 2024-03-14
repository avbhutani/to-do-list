import mongoose from 'mongoose'

const todoitemSchema = new mongoose.Schema({
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    taskContent:{
        type:String,
        required:true,
        lowercase:true
    },
    extraNote:{
        type:String,
        lowercase:true
    }
},{timestamps:true})

export const todoItem = mongoose.model('todoItem',todoitemSchema);