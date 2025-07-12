import jsonwebToken from "jsonwebtoken";


export const signToken = (payload) => {
    return jsonwebToken.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
}

export const verifyToken = (token) => {
    const decoded = jsonwebToken.verify(token, process.env.JWT_SECRET);
    return decoded.id;
}