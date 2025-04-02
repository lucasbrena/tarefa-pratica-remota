const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Lista de tarefas
const tarefas = [
    { id: 1, titulo: 'Estudar Node.js', concluida: false },
    { id: 2, titulo: 'Fazer compras', concluida: true },
    { id: 3, titulo: 'Ler um livro', concluida: false }
];

// Endpoint GET para retornar a lista de tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Endpoint POST para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;

    if (!novaTarefa.titulo || typeof novaTarefa.concluida !== 'boolean') {
        return res.status(400).json({ erro: 'Título e status (concluida) são obrigatórios.' });
    }

    const novaId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;
    const tarefaComId = { id: novaId, ...novaTarefa };

    tarefas.push(tarefaComId);

    res.status(201).json(tarefaComId);
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});