import {todoItem} from '../models/todoitem.models.js'
import {Users} from '../models/users.models.js'
import userController from './userControllers.js'

const taskController = {
    createToDo:async(req,res)=>{
        try{
        let task = req.body.task 
        let note = req.body.note
        let currentUser = req.body.currentUser
        let userReference =  await Users.findOne({username:currentUser});
        const taskObject = new todoItem({
            createdBy:userReference._id,
            taskContent:task,
            extraNote:note,
            taskStatus:false
        })
            await taskObject.save();
            console.log(taskObject)
            res.status(200).json({message:'Task Created Successfully!'})
    }
    catch(error) {
            res.status(500).json({error:`ok error hai`})
    }
    }}

export default taskController;