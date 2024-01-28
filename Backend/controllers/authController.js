const register = (db) => async = (req,res) => {
    const {username, email, password} = req;
    db.query("SELECT email FROM users WHERE email = ?",[email], (error, results) => {
        if(error) {
           console.error(error); 
        }
        if(results.length > 0) {
            return req.render('register', {message: 'that email is already in use'})
        }
        else{
            console.log(req.body);
        }
    })
}

module.exports = { register }