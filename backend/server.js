import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import {Users} from './src/models/users.models.js'
import dotenv from 'dotenv'
import connectDB from './src/db/index.js'
// let list = [];

app.use(cors());
app.use(bodyParser.json());
app.use(Users);

dotenv.config({
    path:'./env'
})


// Defining the port and making the server to listen.
const port = 3000; // You can use environment variables for port configuration


// This function will be connceting the database.
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})