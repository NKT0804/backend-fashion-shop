import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, auth } from '../middleware/auth.middleware.js';
import userController from '../controllers/user.controller.js';
import validate from '../middleware/validate.middleware.js';

const userRouter = express.Router();

userRouter.get('/profile', protect, asyncHandler(userController.getProfile));
userRouter.get('/', protect, auth('staff', 'admin'), asyncHandler(userController.getUsersByAdmin));
userRouter.post('/login', validate.login, asyncHandler(userController.login));
userRouter.post('/refresh-token', validate.login, asyncHandler(userController.login));
userRouter.post('/register', validate.register, asyncHandler(userController.register));
userRouter.put('/profile', protect, asyncHandler(userController.updateProfile));
userRouter.patch('/auth/verify-email', asyncHandler(userController.verifyEmail));
userRouter.patch('/auth/cancel-verify-email', asyncHandler(userController.cancelVerifyEmail));
userRouter.patch('/auth/change-password', protect, asyncHandler(userController.changePassword));
userRouter.patch('/auth/forgot-password', asyncHandler(userController.forgotPassword));
userRouter.patch('/auth/reset-password', validate.resetPassword, asyncHandler(userController.resetPassword));
userRouter.patch('/auth/cancel-reset-password', asyncHandler(userController.cancelResetPassword));
export default userRouter;
