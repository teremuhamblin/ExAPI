import { FastifyInstance } from "fastify";
import healthRoute from "./health.route";

export default async function routes(app: FastifyInstance) {
  app.register(healthRoute, { prefix: "/health" });
}
