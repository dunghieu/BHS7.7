import jwt from "jsonwebtoken";
import Token from "../models/token";

const generateToken = (userId, email, secret = process.env.SECRET_KEY) => {
  return jwt.sign({ userId, email }, secret);
};

const verifyToken = async (token) => {
  const payload = jwt.verify(token, process.env.SECRET_KEY);
  const tokenDoc = await Token.findOne({ token, user: payload.userId });
  if (!tokenDoc) {
    throw new Error("Token not found");
  }
  return tokenDoc;
};

module.exports = {
  generateToken,
  verifyToken,
};
