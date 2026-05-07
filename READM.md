🇫🇷 ExAPI
> Avertissement  
> Cette application est utilisée uniquement à des fins de démonstration.

Ceci est le dépôt backend de my super awesome app.  
Il est construit avec Bun et Fastify.  
Je l’ai principalement créé pour démontrer le déploiement d’une application full‑stack.  
Voici le lien du tutoriel :  
👉 https://blog.kerolloz.dev/free-deployment-for-your-full-stack-web-application

<sup>Dépôt frontend 👉 kerolloz/my-super-awesome-app</sup>

---

🚀 Utilisation

`bash
cp .env.example .env  # Crée un nouveau fichier .env et remplis les variables nécessaires
bun i                 # Installe les dépendances requises
bun dev               # Démarre le serveur de développement avec rechargement automatique
bun run build         # Vérifie que TypeScript est satisfait :)
`

---

🐳 Docker

Avant d’exécuter l’image Docker, tu dois créer un fichier .env contenant les mêmes variables que ci‑dessus.

```bash
docker build -t my-super-awesome-api .
docker run -p 5000:5000 --env-file=.env -it --network=host my-super-awesome-api  # utiliser --network=host pour le développement local
```

---
