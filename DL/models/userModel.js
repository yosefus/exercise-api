const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  auth: {
    type: String,
    enum: ['admin', 'read', 'editor'],
    default: 'read',
  },
  email: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  lastUpdate: {
    type: Date,
    default: Date.now(),
  },
  lastLog: {
    type: Date,
    default: Date.now(),
  },
  moreData: {
    type: Object,
  },
  moreDataStr: {
    type: Object,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('user', userSchema);
