const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'academix_eventos',
    password: '1234',
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Erro ao conectar no banco de dados:', err.stack);
    }
    console.log('Banco de dados academix_eventos conectado com sucesso!');
    release();
});

module.exports = pool;