import Auth from '../models/authModel.js';
import { hashPassword, comparePassword } from '../services/authService.js';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await Auth.create({
            name,
            email,
            password: hashedPassword,
            role
        })
        res.status(200).json({
            Message: "User created successfully"})
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }

}

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }


    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

