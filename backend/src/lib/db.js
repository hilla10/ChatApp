import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully:', conn.connection.host);
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error);
    process.exit(1);
  }
};

export default connectDB;
