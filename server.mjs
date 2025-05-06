import express from 'express';
import dotenv from 'dotenv';
import globalError from './middleware/ErrorHandlingMiddleware.mjs';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './db/conn.mjs';

// setup
connectDB();
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());


// routes
app.get('/',(req,res)=>{
    res.json({message: `Hello `});
});

// error handling middleware
app.use(globalError);

// listening
app.listen(PORT,()=>{
    console.log(`Server Listening to the port ${PORT}`);
});