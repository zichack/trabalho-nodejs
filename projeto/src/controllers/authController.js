const db = require('../../database/db');

const renderizarLogin = (req, res) => {
    res.render('login');
};

const login = async (req, res) => {
    const { email, senha, tipo } = req.body;

    try {
        const result = await db.query(
            'SELECT id, nome, email, tipo FROM usuarios WHERE email = $1 AND senha = $2 AND tipo = $3', 
            [email, senha, tipo]
        );
        
        if (result.rows.length > 0) {
            req.session.usuario = result.rows[0];
            return res.redirect('/dashboard');
        }
        res.status(401).send('Credenciais inválidas. Por favor, tenta novamente.');
    } catch (erro) {
        console.error('Erro no login:', erro);
        res.status(500).send('Erro interno do servidor.');
    }
};

const renderizarDashboard = (req, res) => {
    res.render('dashboard', { usuario: req.session.usuario });
};

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports = {
    renderizarLogin,
    login,
    renderizarDashboard,
    logout
};