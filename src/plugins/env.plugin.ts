import { FastifyInstance } from "fastify";
import { config } from "../config/config";

export const registerEnvPlugin = async (app: FastifyInstance) => {
  app.decorate("config", config);
};
