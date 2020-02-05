const User = require("../models/Users");

function savePayment(order, email) {
  console.log("orders from backend", order);
  console.log("emailfrom backend", email);

  const currentUser = User.findOneAndUpdate(
    { email: email, orders: { $elemMatch: { orderNum: order.orderNum } } },
    {
      $set: {
        "orders.$.address": order.address,
        "orders.$.status": "paid",
        "orders.$.payment": order.payment
      }
    }
  );

  return currentUser;
}

module.exports = { savePayment };
