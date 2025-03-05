import express from "express";
import cors from "cors";
import { Model } from "objection";

import router from "./router";
import knex from "./knex/database";

Model.knex(knex);

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use(router);

export default app;