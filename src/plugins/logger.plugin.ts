import { FastifyInstance } from "fastify";

export const registerLoggerPlugin = async (app: FastifyInstance) => {
  app.addHook("onRequest", (req, _, done) => {
    app.log.info(`➡️  ${req.method} ${req.url}`);
    done();
  });
};
