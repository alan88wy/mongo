var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/test";

var findDoc = (db, callback) => {
  var collection = db.collection("test");
  collection.find({ name: "alan" }).toArray((err, docs) => {
    console.log(docs);
    callback();
  });
};

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  var db = client.db("test");
  console.log("Connected to MongoDB");
  findDoc(db, () => {
    client.close();
  });
});

// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   var db = client.db("test");
//   console.log("Connected to MongoDB");
//   var collection = db.collection("test");
//   collection.find({ name: "alan" }).toArray((err, docs) => {
//     console.log(docs);
//     client.close();
//   });
// });
