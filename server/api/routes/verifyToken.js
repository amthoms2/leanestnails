const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if(authHeader){
    const token = authHeader.split(" ")[1];
    //using split method since there is a space after 'Bearer' and before the auth token (in postman)
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if(err) return res.status(403).json("Token not valid!");
      req.user = user;
      next();
    })
  } else {
    return res.status(401).json('You are not authenticated!')
  }
}

const verifyTokenandAuth = (req, res, next) => {

  verifyToken(req, res, () => {

    if(req.user.id === req.params.id || req.user.isAdmin){
      next();
    } else {
      res.status(403).json("Not Authorized!")
    }
  })
}

const verifyTokenandAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if(req.user.isAdmin){
      next();
    } else {
      res.status(403).json("Not Authorized!")
    }
  })
}

module.exports = {verifyToken, verifyTokenandAuth, verifyTokenandAdmin}
