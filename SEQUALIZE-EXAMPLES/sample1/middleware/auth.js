import userServices from "../services/user.services.js";
import tokenServices from "../services/token.services.js";

const auth = async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      throw new Error("Token missing");
    }

    const token = await tokenServices.verifyToken(req.cookies.token);
    const user = await userServices.getUserById(token.userId);

    if (!user.isVerified) {
      throw new Error("User not verified");
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
