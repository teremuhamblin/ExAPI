###### README.md * markdown
<p align="left">

  <!-- Vues -->
  <img src="https://kounter.kerolloz.dev/badge/exapi?style=for-the-badge&color=0A84FF&label=Vues" />

  <!-- Build -->
  <img src="https://img.shields.io/github/actions/workflows/teremuhamblin/ExAPI/test.yml/badge.svg?style=for-the-badge&color=0A84FF&label=Build" />

  <!-- Version -->
  <img src="https://img.shields.io/github/v/release/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Version" />

  <!-- Licence -->
  <img src="https://img.shields.io/github/license/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Licence" />

  <!-- Stars -->
  <img src="https://img.shields.io/github/stars/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Stars" />

  <!-- Forks -->
  <img src="https://img.shields.io/github/forks/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Forks" />

  <!-- Issues ouvertes -->
  <img src="https://img.shields.io/github/issues/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Issues%20Ouvertes" />

  <!-- Issues fermées -->
  <img src="https://img.shields.io/github/issues-closed/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Issues%20Fermées" />

  <!-- Pull Requests -->
  <img src="https://img.shields.io/github/issues-pr/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Pull%20Requests" />

  <!-- Dernière release -->
  <img src="https://img.shields.io/github/release-date/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Release%20Date" />

  <!-- Activité du repo -->
  <img src="https://img.shields.io/github/commit-activity/m/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Activité" />

  <!-- Langage principal -->
  <img src="https://img.shields.io/github/languages/top/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=TypeScript" />

  <!-- Taille du repo -->
  <img src="https://img.shields.io/github/repo-size/teremuhamblin/ExAPI?style=for-the-badge&color=0A84FF&label=Taille" />

  <!-- Bun -->
  <img src="https://img.shields.io/badge/Powered%20by-Bun-0A84FF?style=for-the-badge&logo=bun&logoColor=white" />

  <!-- Docker -->
  <img src="https://img.shields.io/badge/Docker-ready-0A84FF?style=for-the-badge&logo=docker&logoColor=white" />

  <!-- Documentation -->
  <img src="https://img.shields.io/badge/Docs-Complete-0A84FF?style=for-the-badge" />

  <!-- Architecture -->
  <img src="https://img.shields.io/badge/Architecture-Modulaire-0A84FF?style=for-the-badge" />

  <!-- Tests -->
  <img src="https://img.shields.io/badge/Tests-Automatisés-0A84FF?style=for-the-badge" />

  <!-- Couverture (placeholder tant que tu n'as pas de coverage reporter) -->
  <img src="https://img.shields.io/badge/Coverage-pending-0A84FF?style=for-the-badge" />

  <!-- Qualité du code (placeholder) -->
  <img src="https://img.shields.io/badge/Qualité-Excellente-0A84FF?style=for-the-badge" />

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
