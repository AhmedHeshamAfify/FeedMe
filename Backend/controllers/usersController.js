const usersService = require('../services/signUpService')

const userSignUpController = (req, res, next) => {
    const user = req.body
    const token = usersService.signUp(user.userName, user.email, user.password);
    res.status(200).send({ token: token });
}
const userSignInController = async (req, res, next) => {

    const user = req.body;
    const token = await usersService.signIn(user.email, user.password);
    if (token != false) {
        res.status(200).send({ token: token });
    }
    else res.status(405).send("Access Not Allowed")
}
const checkEmailController = async (req, res, next) => {
    const email = req.body;
    const emailExistance = await usersService.checkEmailExist(email.email);
    res.send({ exist: emailExistance })

}

module.exports = { userSignUpController, userSignInController, checkEmailController }