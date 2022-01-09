const exerciseModel = require('../models/exerciseModel');

const exerciseController = {
  readAll: async (filter) => {
    const result = await exerciseModel.find({ ...filter, isDeleted: false }).populate('programingLanguage');
    return result;
  },

  readOneById: async (id) => {
    const result = await exerciseModel.findById(id);
    if (result.isDeleted) throw 'deleted';
    return result;
  },

  create: async (data) => {
    const result = await exerciseModel.create(data);
    return result;
  },

  updateOneById: async (id, data) => {
    const result = await exerciseModel.findByIdAndUpdate(id, data, { new: true });
    return result;
  },

  deleteOneFinal: async (id) => {
    const result = await exerciseModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
  },
};

module.exports = exerciseController;
