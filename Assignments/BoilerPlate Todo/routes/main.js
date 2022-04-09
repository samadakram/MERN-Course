const express = require('express');
const router = express.Router();

const controllers = require('../controllers/main');

router.get('/todos', controllers.get);

router.post('/todos', controllers.post);

router.put('/todos', controllers.put);

router.delete('/todos', controllers.delete);

module.exports = router;