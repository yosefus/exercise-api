const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = async () => {
  try {
    await mongoose.connect(
      process.env.CONNECTION_STRING,
      {
        useNewUrlParser: true,
      },
      (err) => {
        if (err) return console.log('Error: ', err);
        console.log('MongoDB Connection -- Ready state is:', mongoose.connection.readyState);
      }
    );
  } catch (error) {
    console.log('error mongoose', error);
  }
};
