const User = require('../models/Users')

async function saveOrder(email, meals) {
    try {

        const user = await User.findOne({ email: email });

        const lastOrderNum = user.orders.length;
        let orderTotalPrice = 0;
        for (meal of meals) {
            orderTotalPrice += meal.price;
        }
        order = {
            status: "pending",
            orderNum: lastOrderNum + 1,
            totalPrice: orderTotalPrice,
            meals: meals
        }

        const myUser = await User.findOneAndUpdate({ email: email }, { $push: { "orders": order } })


        const myUser22 = await User.findOne({ email: email });
        return myUser22;
    } catch (error) {
        console.log("service error", error)
    }
}




module.exports = { saveOrder }
