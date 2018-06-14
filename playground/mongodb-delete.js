// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Database!');
  }
  console.log('Connected to Database');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Buy chocolate'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Buy chocolate'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  // challenge
  // db.collection('Users').deleteMany({name: 'Test name'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete(
    {
      _id: new ObjectID('5b225c17b0d7da29f6d85465')
    }
  ).then((result) => {
    console.log(result);
  });



  // db.close();
});
