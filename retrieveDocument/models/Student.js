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

//retrieve all document

const getAllDocu = async()=>{
    const result= await studentModel.find();
    // console.log(result);

    // 
    result.forEach((item)=>{
        console.log(
            item.name,
            item.age,
            item.fees.toString(),
            item.hobbies[0],
            item.hobbies[1],
            item.isactive,
            item.comments[0].value,
            item.comments[0].publish,
            item.join
            )
    })
}


//retrieve all docu with specific field/path
const getAllDocSpecificField = async()=>{
    // const result= await studentModel.find().select('name age fees');  //include
    // const result= await studentModel.find().select([ 'name', 'age','fees']);  //include
    // const result= await studentModel.find().select({name:1 , age:1}); //include

    // const result= await studentModel.find().select('-name -age -fees');  //exclude
    // const result= await studentModel.find().select([ '-name', '-age','-fees']);  //exclude
    // const result= await studentModel.find().select({name:0 , age:0}); //exclude

    const result= await studentModel.find({},' name  age');

    console.log(result);

    
}

//retrieve all docu with specific field/path


const getSingleDoc = async()=>{
    const result= await studentModel.findById("65f1c94e4864f1e9c262143e")

    // console.log(result);
    // console.log(result._id);
    console.log(result._id.getTimestamp());
    // console.log(result.name);

    
}


const getSingleDocSpecificField = async()=>{
    const result= await studentModel.findById("65f1c94e4864f1e9c262143e", 'name age');
    console.log(result);
}

const getDocByField = async()=>{
    const result= await studentModel.find({name:'Tara'})
    // console.log(result);
    console.log(result[0].name);
}

const getDocSpecificField = async()=>{
    const result= await studentModel.find({name:'Tara'}).select('name age')
    // console.log(result);
    console.log(result);
}

//getlimiteddoc

const getLimitedField = async()=>{
    // const result= await studentModel.find().limit(4);
    // const result= await studentModel.find({},null,{limit:4});
    const result= await studentModel.find({},'name age',{limit:4});
    // console.log(result);
    console.log(result);
}


export {getAllDocu,getAllDocSpecificField,getSingleDocSpecificField,getDocSpecificField,getLimitedField}