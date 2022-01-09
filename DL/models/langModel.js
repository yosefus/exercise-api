const mongoose = require('mongoose');

const langSchema = new mongoose.Schema({
  langName: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
  },
  tags: [String],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('language', langSchema);
