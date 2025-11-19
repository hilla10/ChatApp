import { Router } from 'express';
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from '../controllers/authController.js';
import { protectRoute } from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

authRouter.put('/update-profile', protectRoute, updateProfile);

authRouter.get('/check', protectRoute, checkAuth);

export default authRouter;
