const config = process.env;

const verifyToken = (req, res, next) => {
//   const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.header("Authorization")?.split(" ")[1];
 
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({message: "A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token, configVariables.JWT_TOKEN);
    req.user = decoded;
    console.log("Decoded Token:", decoded);
  } catch (err) {
    console.log("JWT Token:", err);
    return res.status(401).json("Invalid Token");
  }
  return next();
};

module.exports = { verifyToken }
