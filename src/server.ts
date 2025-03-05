import app from "./infrastructure/app";
import { env } from "./infrastructure/config";

app.listen(env.port, () => console.log(`executando na porta ${env.port}`));