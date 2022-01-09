const express = require('express'),
  router = express.Router(),
  exerciseFunctions = require('../BL/functions/exerciseFunctions');

const task = async (req, res, fn) => {
  console.log(fn, req.body, req.params);

  try {
    const result = await exerciseFunctions[fn](req);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message || error);
    // res.send(error.message || error);
  }
};

router.get('/all', async (req, res) => task(req, res, 'read'));
router.get('/bylang/:id', async (req, res) => task(req, res, 'readByLang'));
router.get('/:id', async (req, res) => task(req, res, 'readOne'));
router.delete('/:id', async (req, res) => task(req, res, 'del'));
router.post('/', async (req, res) => task(req, res, 'createOne'));
router.put('/:id', async (req, res) => task(req, res, 'update'));

module.exports = router;
