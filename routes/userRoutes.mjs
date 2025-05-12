import express from 'express';
import userController from '../controllers/userController.mjs';

const router = express.Router();

// @routes: post/api/user
//  @desc : register user router
//  @access : public
router.post('/register',userController.createUser);
router.post('/login',userController.login);

export default router;