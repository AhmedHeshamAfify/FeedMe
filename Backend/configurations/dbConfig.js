const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:456@cluster0-gxapi.mongodb.net/feedMe?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch(() => console.log('DB connection failed'))

module.exports = mongoose    
