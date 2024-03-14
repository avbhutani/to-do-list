import mongoose from 'mongoose';

const todolistSchema = new mongoose.Schema(
    {
        users: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users'
        },
        todos:{
            type:mongoose.Schema.Type.ObjectId,
            ref:'todoItem'
        }
    }
);

export const Todolist = mongoose.model('Todolist',todolistSchema);