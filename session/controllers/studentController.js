class StudentController{
    static get_session_info = (req,res)=>{
    //    console.log(req.session)
       console.log(req.session.id);
       console.log(req.session.cookie);
       console.log(req.session.cookie.maxAge);
       console.log(req.session.cookie.originalMaxAge);
       console.log(req.sessionID);

        res.send("session info...")
    }

    static destroy_session = ( req,res)=>{
        req.session.destroy(()=>{
            // console.log(`session deleted ${req.session.id}`); session dellted
            console.log(`session deleted `);
        })
        res.send("session destroyed")
    }

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