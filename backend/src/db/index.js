// This is the initial file of the data base.
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config({
    path:'./env'
})

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`database-link`);
        console.log(`MongoDB connected : DB HOST : ${connectionInstance.connection.host}`)
    }
    catch(error) {
        console.error("MongoDB Connection FAILED",error);
        process.exit(1)
        // Process is basically, mtlb tumhaari jo website hai vo ek process pe chal rhi hai, to uss
        // process ka ek object mill jayega aur uss process se tum cheezein kr skte ho.
    }
}


export default connectDB;
