const ordersService = require('../services/ordersService');

const saveOrder = async (req, res, next) => {
    let meals = req.body.meals;
    // let email = req.body.email;
    const user = await ordersService.saveOrder(req.userData.email, meals);
    // const user = await ordersService.saveOrder(email, meals);

    res.status(200).send({ user: user });
}




module.exports = { saveOrder }
