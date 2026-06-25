--CREATE DATABASE academix_eventos;

CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    capacidade INT NOT NULL,
    localizacao VARCHAR(120) NOT NULL
);

CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(120) NOT NULL,
    descricao TEXT,
    data DATE NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    id_sala INT NOT NULL,
    FOREIGN KEY (id_sala) REFERENCES salas(id)
);

CREATE TABLE palestrantes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    biografia TEXT,
    email VARCHAR(120) UNIQUE NOT NULL
);

CREATE TABLE eventos_palestrantes (
    id_evento INT NOT NULL,
    id_palestrante INT NOT NULL,
    PRIMARY KEY (id_evento, id_palestrante),
    FOREIGN KEY (id_evento) REFERENCES eventos(id) ON DELETE CASCADE,
    FOREIGN KEY (id_palestrante) REFERENCES palestrantes(id) ON DELETE CASCADE
);

CREATE TYPE perfil_usuario AS ENUM ('admin', 'inscrito');

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo perfil_usuario NOT NULL DEFAULT 'inscrito'
);

CREATE TABLE inscricoes (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_evento INT NOT NULL,
    data_inscricao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    presenca BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_evento) REFERENCES eventos(id)
);

CREATE TABLE certificados (
    id SERIAL PRIMARY KEY,
    id_inscricao INT UNIQUE NOT NULL,
    codigo_autenticacao VARCHAR(255) UNIQUE NOT NULL,
    data_emissao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_inscricao) REFERENCES inscricoes(id)
);