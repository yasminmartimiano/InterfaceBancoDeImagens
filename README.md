# 🎨 Banco de Imagens – Front-end

Este é o repositório do **front-end** do projeto *Banco de Imagens*, desenvolvido com HTML, CSS e JavaScript. A aplicação exibe uma galeria com imagens cadastradas por usuários e se comunica com a API REST do back-end para realizar operações CRUD.

## 🌐 Funcionalidades

- Exibir galeria de imagens cadastradas
- Adicionar nova imagem (nome + URL)
- Editar imagens existentes
- Remover imagens da galeria
- Atualização dinâmica da galeria após cada ação

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (puro)
- Axios (ou `fetch`) para chamadas HTTP

## 📄 Estrutura da Página (`index.html`)

- Formulário com campos:
  - Nome do autor
  - URL da imagem
  - Botão "Adicionar"
- Lista dinâmica de imagens com:
  - Nome do autor
  - Imagem carregada
  - Botões "Editar" e "Remover"

## 🔁 Integração com API

A aplicação se conecta ao back-end através dos seguintes endpoints:

- `GET /api/imagens` – Listar imagens
- `POST /api/imagens` – Adicionar imagem
- `PUT /api/imagens/{id}` – Editar imagem
- `DELETE /api/imagens/{id}` – Remover imagem

> ⚠️ Certifique-se de que o back-end está rodando na mesma origem ou que o CORS esteja configurado corretamente.

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/frontend-banco-imagens.git
