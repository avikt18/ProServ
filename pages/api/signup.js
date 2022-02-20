import Users from "./models/user";
import bcrypt from 'bcryptjs'
import dbConnect from "../../lib/mongodb";

export default async function handler(req,res){
    await dbConnect()
    try {
        const { email,name,password,isSeller } = req.body;
        
        let isUserExist = Users.findOne({ email })
        if(isUserExist){
            res.status(404).json('User already exist');
            return;
        }

        let hashedPassword = await bcrypt.hash(password,12)
        const newUser = new Users({
            email,
            name,
            password : hashedPassword,
            isSeller
        });
        res.json(newUser);


    } catch (error) {
        res.json({message:'Something went wrong',error: error.message})
    }
}