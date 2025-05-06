import express from 'express';
import dotenv from 'dotenv';
import globalError from './middleware/ErrorHandlingMiddleware.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// setup
app.use(express.json());

// routes
app.get('/',(req,res)=>{
    res.json({message: `Hello `});
});

// middleware

// error handling middleware
app.use(globalError);

// listening
app.listen(PORT,(req,res)=>{
    console.log(`Listening to the port ${PORT}`);
});