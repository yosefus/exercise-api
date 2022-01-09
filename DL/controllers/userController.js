const userModel = require('../models/userModel');

const userController = {
  readAll: async (filter) => {
    const result = await userModel.find({ ...filter, isDeleted: false });
    return result;
  },

  readOneById: async (id) => {
    const result = await userModel.findById(id);
    if (result.isDeleted) throw 'deleted';
    return result;
  },

  readOneByFilter: async (filter) => {
    const result = await userModel.findOne(filter).select('+password');
    if (result.isDeleted) throw 'deleted';
    return result;
  },

  create: async (data) => {
    const result = await userModel.create(data);
    return result;
  },

  updateOneById: async (id, data) => {
    const result = await userModel.findByIdAndUpdate(id, data, { new: true });
    return result;
  },

  deleteOne: async (id) => {
    const result = await userModel.findByIdAndUpdate(id, { status: 'deleted' }, { new: true });
    return result;
  },

  deleteOneFinal: async (id) => {
    const result = await userModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
  },
};

module.exports = userController;
