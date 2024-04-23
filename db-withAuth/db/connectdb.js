import mongoose from "mongoose";

const connectDB =async (DATABASE_URL)=>{
    try {
        // await mongoose.connect(DATABASE_URL);

        const DB_OPTIONS={
            user:'dpk',
            pass:'123456',
            dbName:'schooldb',
            authSource:'schooldb'
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log('connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;
