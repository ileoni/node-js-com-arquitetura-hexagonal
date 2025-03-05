import env from "./env";

const knex = {
    client:     env.databaseClient,
    connection: {
      host:     env.databaseHost,
      database: env.databaseName,
      user:     env.databaseUser,
      password: env.databasePassword
    }
}

export default knex;