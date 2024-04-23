import mongoose from "mongoose";

//defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    age:{type:Number, required:true},
    fees:{type:mongoose.Decimal128, required:true, validate: (value)=> value>=4000.0},
})

//model
 const studentModel = new mongoose.model("student",studentSchema);

 export default studentModel;