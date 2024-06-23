import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@google-docs.v4sh9l0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=google-docs`


mongoose.connect(URL).then(()=>{
    console.log("DB CONNECTED!!!");

}).catch(err => console.log('ERROR CONNECTING DB: ', err));



const server = app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING ON PORT :", PORT);
});

server.on('error', (error) => {
    console.error("Server startup error:", error);
});


app.use("/", route);
