const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'Username is required'],
    unique: true,
    index: true,
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, "Email is invalid"]
  },
  password: String
}, {
    timestamps: true
  })

UserSchema.plugin(passportLocalMongoose);

//return safe user data, without hast, salt, etc
UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username
  }

}


module.exports = mongoose.model('User', UserSchema);