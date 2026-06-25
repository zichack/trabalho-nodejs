const express = require('express');
const router = express.Router();
const palestrantesController = require('../controllers/palestrantesController');

router.get('/', palestrantesController.index);
router.get('/novo', palestrantesController.renderizarNovo);
router.post('/', palestrantesController.criar);

module.exports = router;