import { registerUser, loginUser } from "../services/authservice.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import { cookieOptions } from "../config/config.js";

const register_user = wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const { token, user } = await registerUser(name, email, password);
    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({ message: "Register Success" });
});

const login_user = wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    try {
        const { token, user } = await loginUser(email, password);
        req.user = user;
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({ user: user, message: "Login Successful" });
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(error.statusCode || 401).json({ message: error.message || "Invalid credentials" });
    }
});

const logout_user = wrapAsync(async (req, res) => {
    res.clearCookie("accessToken", cookieOptions);
    res.status(200).json({ message: "Logout Successful" });
});



export default {
    register_user,
    login_user,
    logout_user,
};
