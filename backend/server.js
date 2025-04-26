import express from 'express';
import cors from 'cors';
import { connectDB } from './dbConnection.js';
import dotenv from 'dotenv';
import routes from './routes.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

connectDB();
app.use('/api',routes );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} );