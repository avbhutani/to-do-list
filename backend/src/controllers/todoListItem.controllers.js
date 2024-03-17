import { todoItem } from "../models/todoitem.models.js";
import { Users } from "../models/users.models.js";
import userController from "./userControllers.js";

const taskController = {
  createToDo: async (req, res) => {
    try {
      let task = req.body.task;
      let note = req.body.note;
      let currentUser = req.body.currentUser;
      let userReference = await Users.findOne({ username: currentUser });
      const taskObject = new todoItem({
        createdBy: userReference._id,
        taskContent: task,
        extraNote: note,
        taskStatus: false,
      });
      await taskObject.save();
      console.log(taskObject);
      res.status(200).json({ message: "Task Created Successfully!",status:200});
    } catch (error) {
      res.status(500).json({ error: `ok error hai`});
    }
  },

  findToDo: async(req,res)=>{
    try {
      let currentUser = req.body.currentUser;
      let tdi = await todoItem.findOne({username:currentUser});
      console.log(tdi)
      return tdi
    } catch (error) {
      return {error:'Dikkat hai'};
    }
  },

  updateToDo:async(req,res)=>{ 
    try {
     let currentUser = req.body.currentUser;
     let userReference = await Users.findOne({ username: currentUser });
     let task = await todoItem.findOne({createdBy:userReference._id});
     task.taskContent = req.body.task
     task.extraNote = req.body.note
      await todoItem.save()
      res.status(200).JSON({message:'Data updated Successfully!'})
    } catch (error) {
      res.status(500).JSON({error:'Internal server error.'})
    }
  }

};

export default taskController;
