import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

export const registerCorsPlugin = async (app: FastifyInstance) => {
  await app.register(cors, {
    origin: "*",
  });
};
