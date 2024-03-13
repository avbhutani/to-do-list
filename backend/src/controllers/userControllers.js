import { json } from 'express'
import {Users} from '../models/users.models.js'

// the user controller will consist of all the actions that the user can perform such as creating, login etc.
const userController  = {

    // all the statements shall be well enclosed in a try catch format so that nothing bad happens.
    // Controller for creating a user.
    createUser: async(req,res)=> {
        try{

            console.log(req.body)
            const usernameMatch = await Users.findOne({username:req.body.name1})
            const passwordMatch = await Users.findOne({password:req.body.password})
            if(usernameMatch && passwordMatch) {
                console.log(req.body);
                res.status(200).json({message:"User already exists. Kindly login!"})
            }
            else {
            const us = new Users({
                username:req.body.name1,
                password:req.body.password
            })


            await us.save()
            
        res.status(201).json({message:"User created successfully."}); }
    }
    catch(error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Unable to create the User. Internal Server Error.' });
    }
    },

    // the below controller will check if the user exists in the database or not.
    checkUser:async(req,res)=> {
        try {
            const usernameMatch = await Users.findOne({username:req.body.name1})
            const passwordMatch = await Users.findOne({password:req.body.password})
            if(usernameMatch && passwordMatch) {
                console.log(req.body);
                res.status(200).json({message:`${req.body.name1} Successfully logged in.`})
            }
            else throw error
        } catch (error) {
            res.status(400).json({error:"Unable to find the user. Please try again.",status:400})
        }
    },


    // Controller for deleting the user, by just specifying the username.
    deleteUser: async(req,res)=> {
        try {
            console.log(req.body)
            await Users.deleteOne({username:req.body.name1})
            res.status(202).json({message:"User deleted Successully."})
        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Unable to delete the user. Internal Server Error.",status:500})
        }
    },
    updateUser:async(req,res)=> {

    },

    // Controller for reading/getting the details of a particular user.
    readUser:async(req,res)=> {
        try {
            console.log("user finding in progress");
            const u = await Users.findOne({username:req.body.name1});
            res.status(200).json(u);
        }
        catch(error){ 
            res.status(500).json({error:"Unable to read the user details."})
        }
        
    }
}


// Using modulejs, that's why there's a need to export the controller, so it can be used in other modules.
export default userController