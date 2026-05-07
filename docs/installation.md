📘 2. installation.md (Markdown)
Installation complète + Docker + environnements.

`md

Installation – ExAPI

Prérequis
- Bun ≥ 1.0
- Node.js ≥ 20 (optionnel)
- Docker & docker-compose
- PostgreSQL (si utilisation hors Docker)

Cloner le projet
`bash
git clone https://github.com/teremuhamblin/ExAPI.git
cd ExAPI
`

Installation des dépendances
`bash
bun install
`

Configuration des environnements
Les fichiers suivants existent :
- .env.example
- .env.development.example
- .env.production.example

Créer votre fichier .env :
`bash
cp .env.example .env
`

Lancer en mode développement
`bash
bun run dev
`

Lancer en production
`bash
bun run start
`

Lancer via Docker
`bash
docker-compose up --build -d
`

Vérifier le fonctionnement
`bash
curl http://localhost:3000/health
`
`

---
