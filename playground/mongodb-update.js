// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to Mongo DB Server')
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').findOneAndUpdate({ 
  //   _id: new ObjectId('5b9024fcd5fbd8651c8e6189')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5b8ee89fd5fbd8651c8e074d')
  }, {
      $set: {
        name: 'Doren'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOrignal: false
    }).then((result) => {
      console.log(result)
    });


  // db.close()
});