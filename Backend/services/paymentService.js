const User = require('../models/Users')

function savePayment(payment,email) {

    console.log(payment);
    
    console.log(email);
    
    // const user = User.find({ email:email })
    const user = User.findOneAndUpdate({email:email},{$push:{"payments":payment}} , {new :true })
    
    return user

}




module.exports = { savePayment }
