const User = require('../models/Users')

function savePayment(order,email) {


    console.log('orders from backend',order);
    console.log('emailfrom backend',email);

    
    const currentUser =  User.updateOne({email:email, orders : { } } , {$set : {"orders.$.address" : order.address}})

//    const lastOrder=  User.aggregate([
//         { 
//           $match: { 
//             'email': email
//           }
//         },
//         { 
//           $project: {
//             orders: {
//               $slice: [ "$orders", -1 ] 
//             }
//           }
//         }
//       ]);

//       console.log(lastOrder);
      

    


// lastOrder=orders

    // const currentUser = User.findOneAndUpdate({email:email},{$push:{"orders":orders}})
    // const user = User.findOneAndUpdate({email:email},{$push:{"orders":orders}})
    // const user2 = User.find({email:email});

    return currentUser

}




module.exports = { savePayment }
