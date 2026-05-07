📘 4. architecture.md (Markdown)
Structure interne + conventions + plugins.

`md

Architecture – ExAPI

Structure du projet
`
src/
 ├─ app.ts
 ├─ server.ts
 ├─ routes/
 ├─ controllers/
 ├─ plugins/
 ├─ utils/
 ├─ config/
`

Description des dossiers
- routes/ : définition des endpoints
- controllers/ : logique métier
- plugins/ : extensions Fastify
- utils/ : helpers internes
- config/ : configuration centralisée

Cycle de requête
1. Requête entrante  
2. Plugin global  
3. Route correspondante  
4. Contrôleur  
5. Réponse formatée  

Plugins internes
- Logger
- CORS
- JWT
- Validation

Conventions
- TypeScript strict
- Pas de logique dans les routes
- Controllers minimalistes
- Utils réutilisables
`

---
