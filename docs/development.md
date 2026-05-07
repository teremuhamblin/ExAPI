📘 5. development.md (Markdown)
Workflow complet + tests + CI/CD + bonnes pratiques.

`md

Development – ExAPI

Workflow recommandé
1. Créer une branche
2. Développer la fonctionnalité
3. Ajouter tests + documentation
4. Lancer les tests
5. Créer une Pull Request

Tests
`bash
bun test
`

Qualité du code
- Pas de console.log
- Typage strict
- Fonctions courtes
- Modules isolés

CI/CD (à venir)
- Lint
- Tests
- Build
- Déploiement Docker

Bonnes pratiques
- Toujours documenter les endpoints
- Garder les plugins simples
- Ne jamais exposer les secrets
- Utiliser .env pour la configuration
`

---
