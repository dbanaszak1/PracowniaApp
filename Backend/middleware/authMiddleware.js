const jwt = require('jsonwebtoken');

//Verify user
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
      } else {
        next();
      }
    });
  }
  else {
  }
}

//Check user 
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        res.locals.user = decodedToken.email;
        next();
      }
    });
  }
  else {
    res.locals.user = null;
    next();
  }
};


module.exports = { checkUser, requireAuth};