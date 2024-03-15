import mongoose from 'mongoose'

const todoitemSchema = new mongoose.Schema({
    createdBy:{
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
    },
    taskStatus:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

export const todoItem = mongoose.model('todoItem',todoitemSchema);