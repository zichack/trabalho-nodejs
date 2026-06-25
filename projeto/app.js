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

app.use('/', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr corretamente na porta http://localhost:${PORT}`);
});