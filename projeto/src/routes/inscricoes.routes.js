const express = require('express');
const router = express.Router();
const inscricoesController = require('../controllers/inscricoesController');

router.post('/', inscricoesController.criar);

module.exports = router;