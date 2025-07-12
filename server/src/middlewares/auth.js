import jwt from "jsonwebtoken";
import User from "../models/User";

module.exports = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "No token, auth denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-passwordHash");
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
