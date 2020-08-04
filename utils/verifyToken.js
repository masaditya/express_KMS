const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const jwtSecret = process.env.JWTSECRET || "";
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined;
    if (token) {
        jwt.verify(token, jwtSecret, (err, payload) => {
            if (err) {
                throw err;
            }
            //mendapatkan payload disini
            req.user = payload;
            // res.json(payload.role);
            next();
        });
    } else {
        // res.status(403).json({ message: "Forbidden" });
        res.status(403).send({
            success: false,
            message: "No Token Provided."
        });
    }
}

module.exports = verifyToken;