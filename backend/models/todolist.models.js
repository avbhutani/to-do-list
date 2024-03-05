import mongoose from 'mongoose';

const todolistSchema = new mongoose.Schema(
    {
        users: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users'
        },
        taskId: {
            type:Number,
            required:true,
            unique:true
        },
        taskContent: {
            type:String,
            required:true
        },
        editNote: {
            type:String,
        },
        createdBy: {
            type:String,
            required:true,
        }
    },{timestamps:true}
);

export const Todolist = mongoose.model('Todolist',todolistSchema);