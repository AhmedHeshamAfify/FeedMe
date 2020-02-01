const usersService = require('../service/signUpService')

const userSignUpController = (req, res, next) => {
    const user = req.body
    const token = usersService.signUp(user.userName, user.email, user.password);
    res.status(200).send(token);
}
const userSignInController = async (req, res, next) => {

    const user = req.body;
    const token = await usersService.signIn(user.email, user.password);
    if (token != false) {
        res.status(200).send(token);
    }
    else res.status(405).send("Access Not Allowed")
}

module.exports = { userSignUpController, userSignInController }