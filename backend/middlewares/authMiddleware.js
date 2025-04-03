import jwt from "jsonwebtoken";
import dotenv from 'dotenv';



dotenv.config(); // Load .env file

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d' } // Token expires in 7 days
    );
};

export default generateToken;