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

//check admin
checkAdmin = (db) => async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
      } else {
        res.locals.user = decodedToken.email;
      }
    })};
    const email = res.locals.user;
  db.query('SELECT admin FROM users WHERE users.email = ?',[email], async (err, results) => {
    if(err) {
      console.error(err);
    }
    else if(results.length == 0){
      console.log('Not admin');
    }
    else if(results[0].admin == 1){
      next();
    }
    else{
      console.log('Not admin');
    }
  })
}

module.exports = { checkUser, requireAuth, checkAdmin };