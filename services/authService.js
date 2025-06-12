import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hashed=  await bcrypt.hash(password, salt);
    return hashed;
}

export const comparePassword = async (enteredPassword , hashedPassword) =>{
    return await bcrypt.compare(enteredPassword , hashedPassword)
}

export const generateTokken = (userId) => {
    return jwt.sign({id: userId} , process.env.JWT_Secret , {expiresIn: '1d'} )
}

export const verifyToken = (token) =>{
    return jwt.verify(token , process.env.JWT_Secret)
}