const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['draft', 'publish', 'deleted'],
    default: 'draft',
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  type: {
    type: String,
    enum: ['short', 'rolling', 'tutorial'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  labels: {
    type: Array,
  },
  programingLanguage: {
    type: mongoose.Types.ObjectId,
    ref: 'language',
    require: true,
  },
  language: {
    type: String,
    default: 'he',
  },
  content: {
    type: Object,
  },
  solution: {
    type: Array,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  lastUpdate: {
    type: Date,
    default: Date.now(),
  },

  moreData: {
    type: Object,
  },
  moreDataStr: {
    type: Object,
  },
});

module.exports = mongoose.model('exercise', exerciseSchema);
