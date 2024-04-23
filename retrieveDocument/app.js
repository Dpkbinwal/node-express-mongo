import express from 'express';
import connectDB from './db/connectdb.js';

import { getAllDocu,getAllDocSpecificField,getSingleDocSpecificField,getDocSpecificField ,getLimitedField} from './models/Student.js';

const app = express();
const PORT=3000;

const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);
// getAllDocu()
// getAllDocSpecificField()
// getSingleDocSpecificField()
// getDocSpecificField()
getLimitedField()

app.listen(PORT,()=>{

    // console.log('listening on port '+PORT);
    console.log(`server run at ${PORT}`);
})