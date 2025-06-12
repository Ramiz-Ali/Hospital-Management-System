import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
} , {timestamps:true}) 

const Auth = mongoose.model("Auth" , authSchema);

export default Auth;


