const db = require('../../database/db');

const listarTodos = async () => {
    const query = `
        SELECT e.*, s.nome as nome_sala 
        FROM eventos e 
        JOIN salas s ON e.id_sala = s.id 
        ORDER BY e.data ASC, e.horario_inicio ASC
    `;
    const result = await db.query(query);
    return result.rows;
};

const buscarPorId = async (id) => {
    const result = await db.query('SELECT * FROM eventos WHERE id = $1', [id]);
    return result.rows[0];
};

const criar = async (titulo, descricao, data, horario_inicio, horario_fim, id_sala, id_palestrante) => {
    const queryEvento = `
        INSERT INTO eventos (titulo, descricao, data, horario_inicio, horario_fim, id_sala) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
    `;
    const valoresEvento = [titulo, descricao, data, horario_inicio, horario_fim, id_sala];
    const resultEvento = await db.query(queryEvento, valoresEvento);
    const idEventoNovo = resultEvento.rows[0].id;

    if (id_palestrante) {
        const queryVinculo = `INSERT INTO eventos_palestrantes (id_evento, id_palestrante) VALUES ($1, $2)`;
        await db.query(queryVinculo, [idEventoNovo, id_palestrante]);
    }

    return idEventoNovo;
};

const atualizar = async (id, titulo, descricao, data, horario_inicio, horario_fim, id_sala) => {
    const query = `
        UPDATE eventos 
        SET titulo = $1, descricao = $2, data = $3, horario_inicio = $4, horario_fim = $5, id_sala = $6
        WHERE id = $7
    `;
    const valores = [titulo, descricao, data, horario_inicio, horario_fim, id_sala, id];
    await db.query(query, valores);
};

module.exports = { listarTodos, buscarPorId, criar, atualizar };