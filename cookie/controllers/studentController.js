class StudentController{
    static set_cookie = (req,res)=>{
        res.cookie("username","dpkbinwal")
        res.cookie("cart",5)
        // res.cookie("username","dpkbinwal",{maxAge:10000})

        res.send("cookie set...")
    }
    static get_cookie = (req,res)=>{
        res.send("cookie get...")
        console.log(req.cookies);
        // console.log(req.cookies.username);
        // console.log(req.cookies.cart);
    }
    static delete_cookie = (req,res)=>{
        res.clearCookie("username")
        res.send("cookie delete...")
    }
}

export default StudentController;