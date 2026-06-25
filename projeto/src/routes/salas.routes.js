const express = require('express');
const router = express.Router();
const salasController = require('../controllers/salasController');

router.get('/', salasController.index);
router.get('/novo', salasController.renderizarNovo);
router.post('/', salasController.criar);

module.exports = router;