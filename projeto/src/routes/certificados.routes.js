const express = require('express');
const router = express.Router();
const certificadosController = require('../controllers/certificados');

router.get('/', certificadosController.listar); // Admin vê a lista
router.post('/', certificadosController.emitirCertificado); // Aluno gera o documento

module.exports = router;