const express = require('express'),
  router = express.Router(),
  langFunctions = require('../BL/functions/langFunctions');

const task = async (req, res, fn) => {
  console.log(fn, req.body, req.params);

  try {
    const result = await langFunctions[fn](req);
    res.send(result);
  } catch (error) {
    res.send(error.message || error);
  }
};

router.get('/all', async (req, res) => task(req, res, 'read'));
router.post('/all', async (req, res) => task(req, res, 'addAll'));
router.post('/', async (req, res) => task(req, res, 'createOne'));
router.put('/:id', async (req, res) => task(req, res, 'update'));

// router.delete('/:id', async (req, res) => task(req, res, 'del'));
// router.post('/signup', async (req, res) => task(req, res, 'signUp'));

module.exports = router;
