import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import connectDB from './lib/db.js';

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Api is Working');
});

app.use('/api/v1/auth', authRouter);

app.listen(PORT, () =