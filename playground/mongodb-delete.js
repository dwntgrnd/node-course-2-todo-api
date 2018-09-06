// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to Mongo DB Server')
  }
  console.log('Connected to Mongo DB server');


  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Get Hair Cut'}).then((result) => {
  //   console.log(result);
  // });

   db.collection('Users').deleteMany({name: 'Andrew'})

  // // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Get Hair Cut' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false}).then((result) => {
  // console.log(result);
  // }); 

  db.collection('Users').findOneAndDelete( {_id: new ObjectId('5b8969003f0472ba83db73fb')})

  // db.close()
});