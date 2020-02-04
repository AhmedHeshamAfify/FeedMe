const ordersService = require('../services/ordersService');

const saveOrder = async (req, res, next) => {
    const payment = await ordersService.saveOrder()
    res.send(payment)
}




module.exports = { saveOrder }
