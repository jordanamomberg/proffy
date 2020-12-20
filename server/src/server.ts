import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

// express não entende diretamente json, então passamos como um plugin use(express.json())

app.use(routes);

app.listen(3333);


// knex = permite escrever em js. exemplo // SELECT * FROM users => knex('users').select('*')