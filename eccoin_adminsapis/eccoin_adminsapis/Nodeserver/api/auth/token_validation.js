const { json } = require("express/lib/response");
const { verify, decode } = require("jsonwebtoken");
module.exports = {
    checktoken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, process.env.SECRET_KEY, (err, decode) => {
                if (err) {
                    return res.json({
                        success: 0,
                        message: "Invalid Token"
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            return res.json({
                success: 0,
                message: "Access Denied: Unauthorized user"
            });
        }
    }
}