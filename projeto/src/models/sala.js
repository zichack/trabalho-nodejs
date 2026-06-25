const db = require('../../database/db');

const listarTodos = async () => {
    const result = await db.query('SELECT * FROM salas ORDER BY nome ASC');
    return result.rows;
};

const criar = async (nome, capacidade, localizacao) => {
    const result = await db.query(
        'INSERT INTO salas (nome, capacidade, localizacao) VALUES ($1, $2, $3) RETURNING *',
        [nome, capacidade, localizacao]
    );
    return result.rows[0];
};

module.exports = { listarTodos, criar };