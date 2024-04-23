class StudentController{
    static example_session=(req,res)=>{
        req.session.device="mobile";
        if(req.session.count){
            req.session.count++;
        }
        else{
            req.session.count=1;
        }
        res.send(`count is ${req.session.count}`);
    }

    static example_session_dev=(req,res)=>{
        
        if(req.session.device){
            res.send(`device is ${req.session.device}, count is ${req.session.count}`);     
        }else{
            res.send("session device not found")
        }
    }

}

export default StudentController;