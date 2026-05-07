###### README.md * markdown
# 🇫🇷 ExAPI
> Avertissement
- Cette application est utilisée uniquement à des fins de démonstration.
- Ceci est le dépôt backend.
- Il est construit avec Bun et Fastify.
- Créé pour déployer une application full stack.  

---

### 🚀 Utilisation

```bash
cp .env.example .env  
# Crée un nouveau fichier .env et remplis les variables nécessaires

bun i
# Installe les dépendances requises

bun dev
# Démarre le serveur de développement avec rechargement automatique

bun run build
# Vérifie que TypeScript est satisfait :)
```

---

🐳 Docker

Avant d’exécuter l’image Docker, tu dois créer un fichier .env contenant les mêmes variables que ci-dessus.

```bash
docker build -t my-super-awesome-api .
docker run -p 5000:5000 --env-file=.env -it --network=host my-super-awesome-api  # utiliser --network=host pour le développement local
```

---
