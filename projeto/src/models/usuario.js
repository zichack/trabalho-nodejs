const db = require('../../database/db');

const criar = async (nome, email, senha, tipo) => {
    const query = `
        INSERT INTO usuarios (nome, email, senha, tipo) 
        VALUES ($1, $2, $3, $4) RETURNING *
    `;
    const valores = [nome, email, senha, tipo];
    
    const result = await db.query(query, valores);
    return result.rows[0];
};

const listarTodos = async () => {
    const result = await db.query('SELECT id, nome, email, tipo FROM usuarios ORDER BY nome ASC');
    return result.rows;
};

module.exports = {
    criar,
    listarTodos
};