var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
}
);

module.exports = mongoose.model('users', UserSchema, 'users');
