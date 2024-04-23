import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    // _id:Number,
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: (v) => { v >= 5500.50 } },
    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})

// console.log(studentSchema.path('age'));




//creating model/collection name is student
const studentModel = mongoose.model('student', studentSchema)



//update
const updateById=async(id)=>{
    try{
        // const result= await studentModel.findByIdAndUpdate(id,{name:'Pradeep'});
        // const result= await studentModel.findByIdAndUpdate(id,{name:'Pradeep'},{returnDocument:'after'});
        // const result= await studentModel.updateOne({_id:id},{name:'Pradeep'},{returnDocument:'after'});
        const result= await studentModel.updateMany({name:id},{name:'Dpk'},{returnDocument:'after'});

        console.log(result);

    }catch(err){
        console.log(err);
    }
}
//delete
const deleteById=async(id)=>{
    try{
     //also have deleteOne({age:a}) and deleteMany({age:a})
        const result= await studentModel.findByIdAndDelete(id);

        console.log(result);

    }catch(err){
        console.log(err);
    }
}
export {updateById,deleteById}