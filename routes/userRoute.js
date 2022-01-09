const express = require('express'),
  router = express.Router(),
  userFunctions = require('../BL/functions/userFunctions');

const task = async (req, res, fn) => {
  console.log(fn, req.body, req.params);

  try {
    const result = await userFunctions[fn](req);
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
};

router.delete('/:id', async (req, res) => task(req, res, 'del'));
router.post('/login', async (req, res) => task(req, res, 'login'));
router.post('/signup', async (req, res) => task(req, res, 'signUp'));
router.put('/:id', async (req, res) => task(req, res, 'update'));

router.get('/all', async (req, res) => task(req, res, 'read'));

module.exports = router;
