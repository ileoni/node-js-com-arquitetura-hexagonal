import { knex } from "./src/infrastructure/config"

export default {
  development: {
    ...knex,
    migrations: {
      directory: "src/infrastructure/knex/database/migrations"
    },
    seeds: {
      directory: "src/infrastructure/knex/database/seeds"
    }
  },
}