import "dotenv/config";
import jwt from "jsonwebtoken";
import userService from "../services/userService";
import tokenService from "../services/tokenService";
import User from "../models/user";

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const token = await tokenService.generateToken(user._id, user.email);
    return res
      .status(201)
      .json({ message: "Created sucessfully", user, token });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const token = await tokenService.generateToken(user._id, user.email);

  if (user && (await user.comparePassword(password))) {
    res.status(200).json({
      message: "Login success",
      user: {
        _id: user._id,
        email: user.email,
      },
      token,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

module.exports = {
  register,
  login,
};
