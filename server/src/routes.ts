import express from "express";
import db from "./database/connection";
import convertHourToMinute from "./utils/convertHourToMinute";

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

  const trx = await db.transaction();

  //transaction => faz todas as operações do banco ao mesmo tempo, e se uma falhar desfaz as anteriores
  try {
    const insertedUsersIds = await trx("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    //pegando o primeiro user_id e inserindo na table classes
    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await trx("classes").insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinute(scheduleItem.from),
        to: convertHourToMinute(scheduleItem.to),
      };
    });

    await trx("class_schedule").insert(classSchedule);

    await trx.commit();

    return response.status(201).send();

  } catch (err) {
      
    await trx.rollback();

    return response.status(400).json({
      error: "Unexpected error while creating new class",
    });
  }
});

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
