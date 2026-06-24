const express = require('express');
const path = require('path');
const db = require('./database/db'); // Importa a conexão com o banco

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('login'); 
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando liso na porta http://localhost:${PORT}`);
});