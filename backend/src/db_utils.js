const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

function getClient(){
  const client = new MongoClient(uri);
  return client;
}

function getCollection(client, nomCollection){
  const db = client.db("TaskFlow"); 
  const collection = db.collection(nomCollection);
  return { client, collection };
}

module.exports = {
  getClient,
  getCollection
};