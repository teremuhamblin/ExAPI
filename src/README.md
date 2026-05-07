###### ExAPI/src/README.md
# 📁 src/ — Code source de ExAPI
>Ce dossier contient l’intégralité du code source de l’API ExAPI.  
- Il est organisé de manière modulaire, scalable, et optimisée pour Bun + Fastify.

---

### 🧱 Structure générale
```text
src/
├── server.ts          # Point d'entrée de l'application
├── app.ts             # Initialisation Fastify + plugins + routes
│
├── routes/            # Définition des routes
│   ├── index.ts
│   └── health.route.ts
│
├── controllers/       # Logique métier des endpoints
│   └── health.controller.ts
│
├── plugins/           # Plugins Fastify (CORS, logger, env…)
│   ├── env.plugin.ts
│   ├── logger.plugin.ts
│   └── cors.plugin.ts
│
├── utils/             # Fonctions utilitaires
│   ├── logger.ts
│   └── response.ts
│
└── config/            # Configuration & variables d'environnement
    └── config.ts
```

---

### 🚀 Fichiers principaux
##### server.ts
- Point d’entrée exécuté par Bun ou Docker.  
Il démarre le serveur et écoute sur le port défini dans .env.

##### app.ts
>Construit l’application Fastify :  
- charge les plugins  
- enregistre les routes  
- configure les middlewares  

---

### 🛣️ Routes
>Le dossier routes/ contient les définitions des endpoints.  
Chaque route est isolée dans son propre fichier.
###### Exemple inclus :  
- /health → route de vérification de l’état du service

---

### 🧠 Controllers
>Le dossier controllers/ contient la logique métier.  
- Chaque route appelle un controller dédié.

---

### 🔌 Plugins
>Le dossier plugins/ contient les extensions Fastify :
- env.plugin.ts → injection de la config  
- logger.plugin.ts → logs des requêtes  
- cors.plugin.ts → gestion du CORS  

---

### 🧰 Utils
>Fonctions utilitaires réutilisables dans tout le projet :
- logger.ts → logger simple  
- response.ts → helpers de réponses JSON  

---

### ⚙️ Configuration
>Le dossier config/ contient :
- config.ts → charge et expose les variables d’environnement (PORT, JWT, DB, logs, etc.)

---

### 🧪 Healthcheck

L’API expose un endpoint :

```text
GET /health
```

##### Retourne :

```md
json
{
  "status": "ok",
  "uptime": 123.45,
  "timestamp": 1710000000000
}
```

##### Compatible Docker + monitoring.

---

### 🧩 Compilation
>Le code TypeScript est compilé dans :
```text
dist/
```

>Ce dossier est généré automatiquement par :
```text
bun run build
```

---

### 🐳 Docker
>Le serveur démarre automatiquement via :
```text
CMD ["bun", "run", "dist/server.js"]
```

---
