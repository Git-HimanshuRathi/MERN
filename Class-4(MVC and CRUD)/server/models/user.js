const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },

 email: {
    type: Number,
    required: true,
  },

 phone: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
  },
});

let userModel = mongoose.model("users",userSchema);

module.exports = userModel