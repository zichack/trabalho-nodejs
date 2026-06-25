// routes/certificados.js
const express = require('express');
const router = express.Router();
const CertificadoController = require('../controllers/certificados');


router.get('/certificado/:idInscricao', CertificadoController.gerarCertificado);

module.exports = router;