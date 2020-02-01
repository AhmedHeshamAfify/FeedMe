const mongoose = require('../configurations/dbConfig');


const restSchema = new mongoose.Schema({
    name: String,
    desc: String,
    address: String,
    location: [String],
    cuisine: String,
    meals: [String],
    rate: Number

});

const Rest = mongoose.model("restaurant", restSchema);

module.exports = Rest;