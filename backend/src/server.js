import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import path from 'path';

import authRouter from './routes/authRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import connectDB from './lib/db.js';
import { app, server } from './lib/socket.js';

dotenv.config();

await connectDB();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '..frontend', 'dist', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
