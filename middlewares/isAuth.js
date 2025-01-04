import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        error: "User not authenticated",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        error: "Invalid Token",
      });
    }
    console.log(decoded);
    req.id = decoded.id;
    next();
  } catch (error) {
    console.log(error);
  }
};
