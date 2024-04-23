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

// //creating new document 
// this is method 1
// const studentDoc=new studentModel({
//     name:'Laxmi',
//     age:20,
//     fees:6794.3,
//     hobbies:['dancing','reading'],
//     isactive:'true',
//     comments:[{value:'Good student'}]
// })


// //saving document
// const result= await studentDoc.save()
// console.log(result);

// // can also user async await function

// const createDoc = async () => {
//     try {
//         const studentDoc = new studentModel({
//             name: 'Mohit',
//             age: 18,
//             fees: 8794.3,
//             hobbies: ['riding', 'reading'],
//             isactive: 'true',
//             comments: [{ value: 'Good student' }]
//         })
//         //saving document
//         const result = await studentDoc.save()
//         console.log(result);

//     }
//     catch (err) {
//         console.log(err);
//     }
// }


const insertSingleDoc = async (nm,ag,fe,ho,is,comt) => {
    try {
        const studentDoc = new studentModel({
            name: nm,
            age: ag,
            fees: fe,
            hobbies: ho,
            isactive: is,
            comments: comt
        })
        //saving document
        const result = await studentDoc.save()
        console.log(result);

    }
    catch (err) {
        console.log(err);
    }
}




const insertMultiDoc = async () => {
    try {
        const neerajDoc = new studentModel({
            name: 'Neeraj',
            age: 21,
            fees: 8794.3,
            hobbies: ['riding', 'reading'],
            isactive: 'true',
            comments: [{ value: 'Good student' }]
        })

        const radhaDoc = new studentModel({
            name: 'Radha',
            age: 38,
            fees: 48794.3,
            hobbies: ['riding', 'reading'],
            isactive: 'true',
            comments: [{ value: 'Mummy' }]
        })

        const taraDoc = new studentModel({
            name: 'Tara',
            age: 48,
            fees: 158794.3,
            hobbies: ['riding', 'reading'],
            isactive: 'true',
            comments: [{ value: 'Daddy' }]
        })
        //saving document
        const result = await studentModel.insertMany([neerajDoc,radhaDoc,taraDoc]);
        console.log(result);

    }
    catch (err) {
        console.log(err);
    }
}






export {insertMultiDoc,insertSingleDoc};