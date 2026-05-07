import { FastifyInstance } from "fastify";
import { healthController } from "../controllers/health.controller";

export default async function healthRoute(app: FastifyInstance) {
  app.get("/", healthController);
}
