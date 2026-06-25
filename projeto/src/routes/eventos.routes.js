const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

router.get('/', eventosController.index);           
router.get('/novo', eventosController.renderizarNovo); 
router.post('/', eventosController.criar);          

router.get('/:id/editar', eventosController.renderizarEditar);
router.post('/:id/editar', eventosController.editar);

module.exports = router;