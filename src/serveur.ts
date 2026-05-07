import { buildApp } from "./app";
import { config } from "./config/config";

const start = async () => {
  const app = await buildApp();

  try {
    await app.listen({ port: config.PORT, host: "0.0.0.0" });
    app.log.info(`🚀 ExAPI running on port ${config.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
