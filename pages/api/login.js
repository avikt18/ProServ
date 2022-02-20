import Users from "./models/user";
import bcrypt from 'bcryptjs'
import dbConnect from "../../lib/mongodb";

export default async function handler(req,res){
    await dbConnect()
    try {
        const { email,password } = req.body;
        
        let user = Users.findOne({ email })
        if(!user){
            res.status(404).json("User doesn't exist");
            return;
        }

        let passwordMatched = await bcrypt.compare(password,user.password)
        if(!passwordMatched){
            res.status(404).json("Incorrect password or emailID");
            return;
        }
        res.json(user);


    } catch (error) {
        res.json({message:'Something went wrong',error: error.message})
    }
}