const jwt = require('jsonwebtoken');

const requireAuth = ( req, res, next ) => {
    const token = req.cookies.jwt;

    // Check if token exists and is verified
    if ( token ) {
        jwt.verify( token, 'secret', ( err, decodedToken ) => {
            if ( err ) {
                console.error(err);
                res.status(401).json('Unauthorized');
                res.redirect('/login');
            } else {
                next();
            }
        });
    }
    else {
        res.redirect('/login');
    }};