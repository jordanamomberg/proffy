import express from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionController = new ConnectionController();

routes.get("/classes", classesControllers.index);

routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionController.index);

routes.post("/connections", connectionController.create);


export default routes;

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
