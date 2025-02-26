const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.cookies.token; // Read token from cookie

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request
        next(); // Move to the next middleware or controller
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authenticate;
