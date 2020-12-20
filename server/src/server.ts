import express from "express";

const app = express();

app.use(express.json());

// express não entende diretamente json, então passamos como um plugin use(express.json())

app.get("/", (request, response) => {

  return response.json({ message: 'Hello World!'});
});

// NOTAS
// http://localhost:3333/users => rota
// http://localhost:3333/contacts => contacts é o recurso
// métodos:
// GET: buscar ou listar uma informção
// POST: criar uma nova informação
// PUT: Atualizar uma informção existente (integral)
// PATCH: Atualizar partes de uma informação existente (parcial)
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar exemplo /user/:id 
// Query Params: Paginação, filtros, ordenação etc... 

app.listen(3333);


// knex = permite escrever em js. exemplo // SELECT * FROM users => knex('users').select('*')