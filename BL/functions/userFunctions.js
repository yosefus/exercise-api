const {
  create,
  deleteOne,
  deleteOneFinal,
  readAll,
  readOneById,
  updateOneById,
  readOneByFilter,
} = require('../../DL/controllers/userController');

const jwt = require('jsonwebtoken'),
  bcryptjs = require('bcryptjs');

require('dotenv').config();

const login = async (req) => {
  const { password, email } = req.body;
  if (!password || !email) throw 'mising data';

  const foundUser = await readOneByFilter({ email });

  if (!foundUser) throw 'wrong email';
  if (!bcryptjs.compareSync(password, foundUser.password)) throw 'wrong password';

  const { _id, name, img } = foundUser;
  const token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: '10h' });

  return { token, user: { name, img } };
};

const signUp = async (req) => {
  const { name, password, email, auth } = req.body;
  if (!name || !password || !email) throw 'mising data';

  const hassPassword = bcryptjs.hashSync(password, 8);

  return await create({ name, password: hassPassword, email, auth });
};

const update = async (req) => {
  console.log(req.body);
  return 'work';
};

const del = async (req) => {
  console.log(req.body);
  return 'work';
};

const read = async (req) => await readAll();

module.exports = { del, update, signUp, login, read };
