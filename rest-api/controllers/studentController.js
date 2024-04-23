import StudentModel from '../models/Student.js';

class StudentController {
    static createDoc= async(req,res)=>{
        try{
            // const {name, age,fees} = req.body;
            // const doc=new StudentModel({
            //     name,
            //     age,
            //     fees
            // })
            const doc=new StudentModel(req.body);
            const result = await doc.save();
            res.status(201).send(result);

        }catch(err){
            console.log(err);
        }
    }

    static getAllDoc= async(req,res)=>{
        try{
            const result = await StudentModel.find();
            res.send(result);

        }catch(err){
            console.log(err);
        }
    }

    static getSingleDocById= async(req,res)=>{
        try{
            const result = await StudentModel.findById(req.params.id);
            if(!result) return res.send('The student with the given ID was not found.');
            res.send(result);

        }catch(err){
            console.log(err);
        }
    }

    static updateDocById= async(req,res)=>{
        try{
            const result= await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(201).send(result);

        }catch(err){
            console.log(err);
        }
    }

    static deleteDocById= async(req,res)=>{
        try{
            const result= await StudentModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result);

        }catch(err){
            console.log(err);
        }
    }
}

export default StudentController;