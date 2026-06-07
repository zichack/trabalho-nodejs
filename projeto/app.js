const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views')); 

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Gestão de Eventos Acadêmicos' });
});

module.exports = app;