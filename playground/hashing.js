const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// jwt.sign //creates the hash and return token
// jwt.verify //performs opposite of sign

var data = {
  id: 5
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);


// var msg = 'I am user no 3';
// var hash = SHA256(msg).toString();
//
// console.log(`${msg} :- ${hash}`);
