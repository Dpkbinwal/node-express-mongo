import mongoose from "mongoose";

const connectDB = async(DB_URL)=>{
    try{
        const DB_OPTIONS ={
            dbName:'school'
        }
        await mongoose.connect(DB_URL,DB_OPTIONS);
        console.log("Database Connected Success");

    }catch(err){
        console.log(err);
    }
}

export default connectDB;