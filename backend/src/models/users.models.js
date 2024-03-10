import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true,
            unique:true
        },
        username:{
            type:String,
            required:true,
            unqiue:true
        },
        emailId:{
            type:String,
            required:true,
            unique:true
        }
    },{timestamps:true}
);

export const Users = mongoose.model('Users',usersSchema);