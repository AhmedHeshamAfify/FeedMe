const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/Users')

function generateJWT(email) {
    const token = jwt.sign({ _email: email }
        , process.env.SECRETE_KEY)
    return token;
}

function signUp(userName, email, password) {
    saveUser(userName, email, password)
    return generateJWT(email)
}

async function signIn(email, password) {
    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.findOne({ "email": email });
    if (!user) {
        return false
    }
    else {
        const hash = user.password
        if (bcrypt.compareSync(password, hash)) return generateJWT(email);
        else return false
    }


}
async function saveUser(userName, email, password) {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({
        "userName": userName,
        "email": email,
        "password": hashedPassword
    });
    const result = await user.save();
}
async function checkEmailExist(email) {
    const result = await User.find({ "email": email })
    if (result.length > 0) return true;
    else return false;
}

module.exports = { signUp, signIn, checkEmailExist }
