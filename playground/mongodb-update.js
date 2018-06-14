// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Database!');
  }
  console.log('Connected to Database');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b226698b8cc973013770266')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5b2262bfb8cc97301377019b')
    },
    {
      $set: {
        name: 'Test'
      },
      $inc: {
        age: +1
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });

  // db.close();
});
