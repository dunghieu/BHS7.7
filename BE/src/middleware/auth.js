import jwt from "jsonwebtoken";
import User from "../models/user";
import tokenService from "../services/tokenService";

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = tokenService.verifyToken(token);
      req.user = await User.findById(decode.id);
      next();
    } catch (e) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { auth };
