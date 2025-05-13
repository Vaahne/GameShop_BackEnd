import express from 'express';
import userController from '../controllers/userController.mjs';
import userAuthentication from '../middleware/userMiddleware.mjs';

const router = express.Router();

// @routes: post/api/user
//  @desc : register user router
//  @access : public
router.post('/register',userController.createUser);
router.get('/authentication',userAuthentication,userController.userAuthenticationControllerFunction);
router.post('/login',userController.login);

export default router;