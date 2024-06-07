const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
   
  },
  birthdate: {
    type: Date,
    required: true,
  },
});

module.exports = model('Author', authorSchema);