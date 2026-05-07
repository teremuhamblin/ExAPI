###### README.md * markdown
<p align="left">
  <img src="https://kounter.kerolloz.dev/badge/exapi?style=for-the-badge&color=blue&label=Vues" />
  <img src="https://img.shields.io/github/actions/workflow/status/teremuhamblin/ExAPI/test.yml?style=for-the-badge&color=blue&label=Build" />
  <img src="https://img.shields.io/github/license/teremuhamblin/ExAPI?style=for-the-badge&color=blue" />
  <img src="https://img.shields.io/github/v/release/teremuhamblin/ExAPI?style=for-the-badge&color=blue&label=Version" />
</p>

# 🇫🇷 ExAPI
###### Avertissement  
- ExAPI est actuellement en phase initiale de développement.  
- Cette version est fournie à des fins de démonstration et d’expérimentation.

>ExAPI est une API moderne, légère et rapide, conçue pour servir de base à des projets backend modulaires.  
#### Elle s’appuie sur Bun et Fastify, offrant un environnement performant, simple à déployer et facile à étendre.

---

### 🚀 Utilisation
```bash
cp .env.example .env  
# Crée un fichier .env et remplis les variables nécessaires

bun i
# Installe les dépendances

bun dev
# Lance le serveur en mode développement (rechargement automatique)

bun run build
# Vérifie la compilation TypeScript
```

---

### 🐳 Docker
Avant d’exécuter l’image Docker, crée un fichier .env contenant les mêmes variables que dans .env.example.

```bash
docker build -t exapi

docker run -p 5000:5000 --env-file=.env -it --network=host exapi
# --network=host recommandé en local
```

---

### 📁 Structure du projet (indicative)
```text
ExAPI/
├── .gitkeeps
├── .github/ ── .gitkeeps
├── docs/ ── .gitkeeps
├── src/
│   ├── .gitkeeps
│   ├── server.ts
│   ├── routes/ ── .gitkeeps
│   ├── plugins/ ── .gitkeeps
│   └── utils/ ── .gitkeeps
├── .env.example
├── .env.production.example
├── .env.development.example
├── dockerfile
├── docker-compose.yml
├── bunfig.toml
├── package.json
├── tsconfig.json
├── ROADMAP.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

### 🎯 Objectifs du projet
- Fournir une API simple, rapide et extensible  
- Servir de base pour des projets backend modulaires  
- Proposer une architecture claire et maintenable  
- Faciliter le déploiement (Docker, CI/CD, hébergement gratuit ou low‑cost)  

---

### 📌 État du développement
- Version actuelle : v1.0.0 (initiale)  
- Documentation : en cours  
- Modules : en cours  
- Tests : à venir  

---

### 🤝 Contribution
>Les contributions sont les bienvenues.  
##### Merci de respecter :
- la structure du projet  
- les conventions de nommage  
- la qualité du code  
- les bonnes pratiques Fastify/Bun  

---

### 📄 Licence
- Ce projet est distribué sous licence MIT

---
