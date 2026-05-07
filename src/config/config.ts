export const config = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  JWT_SECRET: process.env.JWT_SECRET || "dev_secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",

  DATABASE_URL: process.env.DATABASE_URL || "",

  EXTERNAL_API_URL: process.env.EXTERNAL_API_URL || "",
  EXTERNAL_API_KEY: process.env.EXTERNAL_API_KEY || "",

  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  DEBUG: process.env.DEBUG === "true",

  HEALTHCHECK_PATH: process.env.HEALTHCHECK_PATH || "/health",
};
