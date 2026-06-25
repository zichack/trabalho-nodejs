const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require('./database/db'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'chave_secreta_academix',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

const authRoutes = require('./src/routes/auth.routes');
const eventosRoutes = require('./src/routes/eventos.routes');
const salasRoutes = require('./src/routes/salas.routes');
const inscricoesRoutes = require('./src/routes/inscricoes.routes');
const certificadosRoutes = require('./src/routes/certificados.routes');
const palestrantesRoutes = require('./src/routes/palestrantes.routes');

app.use('/', authRoutes);
app.use('/eventos', eventosRoutes);
app.use('/salas', salasRoutes);
app.use('/inscricoes', inscricoesRoutes);
app.use('/certificados', certificadosRoutes);
app.use('/palestrantes', palestrantesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});