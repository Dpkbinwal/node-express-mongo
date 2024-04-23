import UserModel from "../models/User.js";
import bcrypt from 'bcrypt';

class UserController{
    static home= (req,res)=>{
        res.render("index");
    }

    static registration= (req,res)=>{
        res.render("registration");
    }

    //without bcrypt
    // static createUserDoc=async(req,res)=>{
    //     try{
    //         //creating new document using model
    //         const doc = new UserModel({
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: req.body.password,

    //         })
    //         //saving doc
    //         await doc.save();
    //         res.redirect('/login')
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    
    // static verifyLogin= async(req,res)=>{
    //   try{
    //     const {email,password} = req.body


    //     const result = await UserModel.findOne({email: email});
        
    //     if(!result) return res.redirect("/registration")
        
    //     // console.log(result);
    //     if(result.email==email && result.password==password)
    //         {res.send(`<h1>Dashboard --- ${result} </h1>`)}
    //     else res.send("<h1>Email or password is incorrect</h1>")

       
    //   }catch(error){
    //     console.log(error)
    //   }
    // }

    

    static createUserDoc=async(req,res)=>{
        const hashPassword = await  bcrypt.hash(req.body.password,10);
        try{
            //creating new document using model
            const doc = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,

            })
            //saving doc
            await doc.save();
            res.redirect('/login')
        }catch(err){
            console.log(err);
        }
    }

    static login= (req,res)=>{
        res.render("login");
    }

    //hash to verify
    static verifyLogin= async(req,res)=>{

        try{
          const {email,password} = req.body
  
  
          const result = await UserModel.findOne({email: email});
          
          if(!result) return res.redirect("/registration")
          const isMatch= await bcrypt.compare(password,result.password);
          // console.log(result);
          if(result.email==email && isMatch)
              {res.send(`<h1>Dashboard --- ${result} </h1>`)}
          else res.send("<h1>Email or password is incorrect</h1>")
  
         
        }catch(error){
          console.log(error)
        }
      }

}

export default UserController;