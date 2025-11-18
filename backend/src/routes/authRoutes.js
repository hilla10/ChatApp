import { Router } from 'express';
import { login, logout, signup } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post('/login', l