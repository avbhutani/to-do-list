import express from 'express'
const router = express.Router();
import userController from '../controllers/userControllers.js'
router.post('/users',userController.createUser);

// router.get('/users',userController.readUser);


module.exports = router;