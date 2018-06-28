const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pass = 'testpass123';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(pass, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPass = '$2a$10$kmA53SAnWKwITgiqxsDDE.rkqbLS9CiqoP.5ELlZpQSsFSwzU/3mq';

bcrypt.compare('testpass123', hashedPass, (err, res) => {
  console.log(res);
});

// jwt.sign //creates the hash and return token
// jwt.verify //performs opposite of sign

// var data = {
//   id: 5
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);


// var msg = 'I am user no 3';
// var hash = SHA256(msg).toString();
//
// console.log(`${msg} :- ${hash}`);
