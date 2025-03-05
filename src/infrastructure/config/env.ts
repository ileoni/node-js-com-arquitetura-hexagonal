import "dotenv/config";

const {
    PORT,
    NODE_ENV,
    DATABASE_CLIENT,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD,
    SECRET_KEY
} = process.env;

const env = {
    port:              Number(PORT ?? 3000),
    nodeEnv:           String(NODE_ENV ?? "development"),
    databaseClient:    String(DATABASE_CLIENT),
    databaseHost:      String(DATABASE_HOST),
    databaseName:      String(DATABASE_NAME),
    databaseUser:      String(DATABASE_USER),
    databasePassword:  String(DATABASE_PASSWORD),
    secretKey:         String(SECRET_KEY ?? "secret")
}

export default env;