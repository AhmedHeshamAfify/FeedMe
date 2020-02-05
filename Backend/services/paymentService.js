const User = require('../models/Users')

function savePayment(orders,email) {

    // console.log(payment);
    
    console.log(email);
    
    // const user = User.find({ email:email })
    const user = User.findOneAndUpdate({email:email},{$push:{"orders":orders}})
    // const user2 = User.find({email:email});
    
    return user

}




module.exports = { savePayment }
