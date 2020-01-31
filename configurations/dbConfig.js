const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/?ServiceName=mongodb";

const client = new MongoClient(url,{ useUnifiedTopology: true });

client.connect(function(err, db) {
      if (err) throw err;
      console.log("Database created!");
});


module.exports = client;