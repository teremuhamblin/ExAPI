# Changelog – ExAPI

Toutes les modifications notables du projet seront documentées ici.

---

## [2.0.0] – 2026-05-07
### Ajouté
- Nouvelle architecture modulaire `src/`
- Système de plugins Fastify
- Dockerfile unifié et optimisé
- docker-compose avec PostgreSQL + healthchecks
- Configuration `.env.*` complète
- Documentation avancée (README, structure, API)

### Modifié
- Refactor complet du serveur (Bun + Fastify)
- Amélioration des performances de démarrage
- Séparation claire routes / contrôleurs / utils

### Supprimé
- Ancienne structure minimaliste non maintenable

---

## [1.2.0] – 2026-04-20
### Ajouté
- Support JWT
- Ajout logs structurés
- Ajout tests unitaires initiaux

### Modifié
- Amélioration gestion erreurs globales

---

## [1.1.0] – 2026-04-10
### Ajouté
- Routes API supplémentaires
- Documentation initiale

---

## [1.0.0] – 2026-04-01
### Première version stable
- Serveur Fastify minimal
- Endpoints de base
- Structure simple pour démarrer
