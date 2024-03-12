import express from 'express'
const router = express.Router();
import userController from '../controllers/userControllers.js'
router.post('/users',userController.createUser);
router.post('/users/login',userController.checkUser);
router.post('/users/delete',userController.deleteUser);
router.get('/users/getUser',userController.readUser);
// router.get('/users',userController.readUser);


// module.exports = router;
export default router