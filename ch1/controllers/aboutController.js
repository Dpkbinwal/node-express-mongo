import path  from 'path';

const detail = (req,res)=>{
//    console.log(process.cwd());
//  res.send("this  is about page inside about controller");

// res.sendFile('P:\\Pradeep\\Desktop\\node\\ch1\\views\\index.html');
// res.sendFile(path.join(process.cwd(), 'views','index.html'));

res.send({
    name : "pradeep",
    age:22,
    
})

}

export default detail;