const User = require('../models/Users')

function savePayment(payment,email) {

    console.log(payment);
    
    console.log(email);
    
    // const user = User.find({ email:email })
    const user = User.findOneAndUpdate({email:email},{$push:{"payments":payment}})
    
    return user

}




module.exports = { savePayment }
