import express from 'express'
import taskController from '../controllers/todoListItem.controllers.js';
const router = express.Router();
// import userController from '../controllers/userControllers.js'

router.post('/createToDo',taskController.createToDo)


// module.exports = router;
export default router