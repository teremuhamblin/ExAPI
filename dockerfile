# ================================
# 1. Base & dépendances (prod)
# ================================
FROM oven/bun:1 AS deps
WORKDIR /app

COPY bun.lockb package.json ./
RUN --mount=type=cache,target=/root/.bun \
    bun install --frozen-lockfile --production


# ================================
# 2. Build (TypeScript → dist/)
# ================================
FROM oven/bun:1 AS build
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules node_modules

ENV NODE_ENV=production
RUN bun run build


# ================================
# 3. Image finale (release)
# ================================
FROM oven/bun:slim AS release
WORKDIR /app

# Dépendances prod uniquement
COPY --from=deps /app/node_modules node_modules

# Code compilé
COPY --from=build /app/dist dist
COPY package.json .

# Sécurité
USER bun

EXPOSE 5000

# Healthcheck (optionnel, si tu as /health)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:5000/health || exit 1

CMD ["bun", "run", "dist/server.js"]
