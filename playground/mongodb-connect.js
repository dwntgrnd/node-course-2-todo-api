// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to Mongo DB Server')
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to Do',
  //   completed: false
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })


  // db.collection('Users').insertOne({
  //   name: 'Doren',
  //   age: 55,
  //   location: 'Salem'
  // }, (err, result) => {
  //   if(err){
  //     console.log('Could not enter User', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.close()
});