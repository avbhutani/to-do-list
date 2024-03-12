import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/routes/userRoutes.js'
import connectDB from './src/db/index.js'
// import bodyParser from 'body-parser'
// let list = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

dotenv.config({
    path:'./env'
})


// Defining the port and making the server to listen.
// const port = 3000; // You can use environment variables for port configuration


// This function will be connceting the database.
connectDB()
.then(() => {
    app.listen(8000, () => {
        console.log(`Server is running at port : ${8000}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})