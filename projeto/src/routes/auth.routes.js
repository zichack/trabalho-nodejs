const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verificarAutenticacao } = require('../middlewares/auth');

router.get('/', authController.renderizarLogin);
router.post('/login', authController.login);

router.get('/dashboard', verificarAutenticacao, authController.renderizarDashboard);
router.get('/logout', authController.logout);

module.exports = router;