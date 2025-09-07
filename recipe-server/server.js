import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';

const PORT = process.env.PORT;
const app = express();
dotenv.config();
dbConnect();
app.use(express.json(), cors());


app.listen(PORT, () =>
    console.log(`Running on ${PORT}`)
);

