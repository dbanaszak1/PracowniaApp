const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const maxAge =24 * 3 * 60 * 60;
const createToken = ( email ) => {
    return jwt.sign({ email }, 'secret code 1', {
        expiresIn: maxAge
    } );
}


const register = (db) => async = (req,res) => {
    const {username, email, password} = req.body;
    db.query("SELECT email FROM users WHERE email = ?",[email], async (error, results) => {
        if(error) {
           console.error(error); 
        }
        else if(results.length > 0) {
            return res.status(200).json('Email already in use')
        }
        let hashedPassword = bcrypt.hashSync(password, 8);
        db.query("INSERT INTO users SET ?", {username: username, email: email, password: hashedPassword}, (err, results) => {
            if(err) {
                console.error(err);
            }
            else{
                const token = createToken(email);
                res.cookie('jwt', token, {httpOnly: true, secure: true, maxAge: maxAge * 1000});
                res.status(200).json('Registered successfully!');
            }
        })
    })
}

const login = (db) => async (req, res) => {
    const {email, password} = req.body;
    db.query('SELECT password FROM users WHERE users.email = ?',[email], async (err, results) => {
        if(err) {
            console.error(err);
        }
        else if(results.length == 0){
            return res.send('Failed to log in');
        }
        else{
            console.log(results[0].password)
            bcrypt.compare(password, results[0].password, function(error, response) {
                if(response){
                    return res.send('Logged in');
                }
                else{
                    return res.send('Failed to log in');
                }
            });
        }
    })
}

module.exports = { register, login }