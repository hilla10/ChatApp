import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import connectDB from './lib/db.js';

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Api is Working');
});

app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
