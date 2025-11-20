import { Router } from 'express';
import { protectRoute } from '../middlewares/authMiddleware.js';
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from '../controllers/messageController.js';

const messageRouter = Router();

messageRouter.get('/users', protectRoute, getUsersForSidebar);
messageRouter.get('/:id', protectRoute, getMessages);

messageRouter.post('/send/:id', protectRoute, sendMessage);

export default messageRouter;
