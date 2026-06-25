INSERT INTO usuarios (nome, email, senha, tipo) 
VALUES ('Administrador Geral', 'admin@positivo.br', 'admin123', 'admin')
ON CONFLICT (email) DO NOTHING;

INSERT INTO usuarios (nome, email, senha, tipo) 
VALUES ('Aluno Teste', 'aluno@positivo.br', 'aluno123', 'inscrito')
ON CONFLICT (email) DO NOTHING;

INSERT INTO salas (nome, capacidade, localizacao) 
VALUES ('Auditório Principal', 250, 'Bloco A');