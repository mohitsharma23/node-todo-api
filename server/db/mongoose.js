var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://mohit.sharma:weapons1@ds163530.mlab.com:63530/node-todo-api-m'
}
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);

module.exports = {
  mongoose
};
