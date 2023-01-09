import { Router } from "express";
import { users } from "../data";
import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import { HTTP_BAD_REQUEST } from '../constants/http_status'
import { User, UserModel } from "../Models/user.model";
import bcrypt from 'bcryptjs';

const router = Router()

router.get("/seed", expressAsyncHandler (
    async (req, res) => {
        const userCount = await UserModel.countDocuments()
        if(userCount){
            res.send("Seed is already done!!")
        }

        await UserModel.create(users);
        res.send("Seed is Done!")
}))

router.post("/login", (req, res) => {
    const {email, password }= req.body
    const user = users.find((user: { email: string; password: string }) => user.email == email &&
    user.password == password)
    if(user){

        res.send(generateTokenResponse(user))
    }else{
        res.status(400).send("User name or password is not valid!")
    }
});


const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        id:user.id,
        email:user.email, isAdmin: user.isAdmin
    }, process.env.JWT_SECRET!, {
        expiresIn: "30d"
    });
    user.token = token;
    return user
}

router.post('/register', expressAsyncHandler(
    async(req, res) => {
        const {name, email, password, address} = req.body
        const user = await UserModel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST).send('User already exist');
            return;
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser: User = {
            id: '',
            name,
            email: email.toLowerCase(),
            address,
            isAdmin: false
        }
        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
))


export default router