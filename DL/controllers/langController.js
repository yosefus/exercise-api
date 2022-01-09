const langModel = require('../models/langModel');

const userController = {
  readAll: async (filter) => {
    const result = await langModel.find({ ...filter, isDeleted: false });
    return result;
  },

  readOneById: async (id) => {
    const result = await langModel.findById(id);
    if (result.isDeleted) throw 'deleted';
    return result;
  },

  readOneByFilter: async (filter) => {
    const result = await langModel.findOne(filter).select('+password');
    if (result.isDeleted) throw 'deleted';
    return result;
  },

  create: async (data) => {
    const result = await langModel.create(data);
    return result;
  },

  updateOneById: async (id, data) => {
    const result = await langModel.findByIdAndUpdate(id, data, { new: true });
    return result;
  },

  deleteOneFinal: async (id) => {
    const result = await langModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
  },
};

module.exports = userController;
