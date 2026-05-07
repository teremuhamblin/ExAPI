import Fastify from "fastify";
import routes from "./routes";
import { registerEnvPlugin } from "./plugins/env.plugin";
import { registerLoggerPlugin } from "./plugins/logger.plugin";
import { registerCorsPlugin } from "./plugins/cors.plugin";

export const buildApp = async () => {
  const app = Fastify({ logger: true });

  await registerEnvPlugin(app);
  await registerLoggerPlugin(app);
  await registerCorsPlugin(app);

  app.register(routes);

  return app;
};
