import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoutes from './src/routes/userRoutes.js'
import todoRoutes from './src/routes/todoroutes.js'
import connectDB from './src/db/index.js'
// import bodyParser from 'body-parser'
// let list = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// for accessing the api's of the user function.
app.use(UserRoutes);

// for accessing the api's of the general to do addition and updation functions.
app.use(todoRoutes);

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