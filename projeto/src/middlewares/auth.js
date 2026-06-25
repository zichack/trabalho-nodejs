const verificarAutenticacao = (req, res, next) => {
    if (req.session && req.session.usuario) {
        return next();
    }
    res.redirect('/');
};

const verificarAdmin = (req, res, next) => {
    if (req.session && req.session.usuario && req.session.usuario.tipo === 'admin') {
        return next();
    }
    res.status(403).send('Acesso negado. Esta rota é restrita a administradores.');
};

module.exports = {
    verificarAutenticacao,
    verificarAdmin
};