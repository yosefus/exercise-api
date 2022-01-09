const {
  create,
  deleteOneFinal,
  readAll,
  readOneById,
  updateOneById,
  readOneByFilter,
} = require('../../DL/controllers/langController');

const createOne = async (req) => {
  const { langName, icon, tags } = req.body;
  const newLang = await create({ langName, icon, tags });
  return newLang;
};

const addAll = async (req) => {
  const all = req.body;
  all.forEach(async (a) => await create(a));
  return true;
};

const update = async (req) => {
  const id = req.params.id;
  const newLang = await updateOneById(id, req.body);
  return newLang;
};

const del = async (req) => {
  console.log(req.body);
  return 'work';
};

const read = async (req) => await readAll();

module.exports = { del, update, createOne, read, addAll };
