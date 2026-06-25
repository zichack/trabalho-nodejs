const db = require('../../database/db');

module.exports = {
    listarTodos: async () => {
        const result = await db.query('SELECT * FROM palestrantes ORDER BY nome ASC');
        return result.rows;
    },
    criar: async (nome, biografia, email) => {
        const result = await db.query(
            'INSERT INTO palestrantes (nome, biografia, email) VALUES ($1, $2, $3) RETURNING *',
            [nome, biografia, email]
        );
        return result.rows[0];
    }
};