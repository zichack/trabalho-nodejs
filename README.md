# 🎓 Academix Eventos
**Sistema de Gestão de Eventos Acadêmicos**

Projeto prático do curso de Análise e Desenvolvimento de Sistemas (ADS). O sistema é uma aplicação web fullstack desenvolvida com arquitetura MVC, banco de dados relacional e controle de autenticação/sessão.

🔗 **Link Github Projects (Kanban):** [Acessar o Painel](https://github.com/users/zichack/projects/2/views/1)

---

## 🚀 Visão Geral do Sistema

O **Academix Eventos** atende a dois perfis de usuários distintos:

*   **Administrador:** Possui acesso total ao Dashboard administrativo. É responsável pelo gerenciamento estrutural do sistema, podendo realizar o CRUD de **Eventos**, **Salas** e **Palestrantes**, além de visualizar os certificados emitidos.
*   **Aluno (Inscrito):** Possui acesso a um painel exclusivo onde pode visualizar os eventos disponíveis, realizar inscrições e solicitar a emissão de seus certificados.

---

## 🛠️ Tecnologias Utilizadas

*   **Backend:** Node.js, Express
*   **Arquitetura:** MVC (Model, View, Controller)
*   **Frontend:** EJS (Template Engine), HTML5, CSS3 e Bootstrap 5
*   **Banco de Dados:** PostgreSQL (driver `pg`)
*   **Autenticação:** `express-session` (Sessões locais) e Criptografia nativa (`crypto`) para validação de certificados.

---

## 📦 Módulos e Funcionalidades Principais

*   **Autenticação:** Login, logout e proteção de rotas privadas usando Middlewares.
*   **Gestão de Eventos:** Cadastro de eventos com vínculo de Salas (1:N) e Palestrantes (N:N).
*   **Gestão de Salas:** Cadastro de espaços com capacidade e localização.
*   **Gestão de Palestrantes:** Registro de profissionais com suas respectivas biografias.
*   **Motor de Inscrições:** Processo de vinculação entre Usuários (Alunos) e Eventos.
*   **Módulo de Certificados:** 
    *   *Validação e Autenticação:* Gera um código único (Hash) de validação para cada certificado.
    *   *Regra de Presença:* Valida a emissão do documento perante a participação do aluno. *(Nota: Trava desativada no ambiente de desenvolvimento para facilitar os testes da banca).*
    *   *Geração Dinâmica:* Renderiza o certificado dinamicamente em tela.

---

## 💻 Como rodar o projeto localmente

Siga os passos abaixo para executar a aplicação na sua máquina:

**1. Clone o repositório e instale as dependências**
```bash
git clone <url-do-repositorio>
cd projeto
npm install
