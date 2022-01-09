const express = require('express'),
  app = express(),
  cors = require('cors');

require('dotenv').config();

const { connect } = require('./DB');
connect();

app.use(express.json());
app.use(cors());

app.use('/api/user', require('./routes/userRoute'));
app.use('/api/exercise', require('./routes/exerciseRoute'));
app.use('/api/lang', require('./routes/langRoute'));

app.listen(process.env.PORT || 3200, () => console.log('server runing on port 3200'));
