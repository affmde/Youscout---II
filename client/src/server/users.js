
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://affmde:Andremiranda1@affm.795qg.mongodb.net/sample_mflix.theaters?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
