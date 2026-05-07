📘 3. usage.md (Markdown)
Documentation complète des endpoints + exemples.

`md

Usage – ExAPI

Endpoint de santé
`
GET /health
`

Réponse :
`json
{ "status": "ok" }
`

Exemple d’appel API
`bash
curl -X GET http://localhost:3000/api/v1/users
`

Authentification JWT
- Header : Authorization: Bearer <token>
- Expiration configurable via .env

Endpoints principaux

GET /api/v1/users
Retourne la liste des utilisateurs.

POST /api/v1/users
Crée un utilisateur.

Payload :
`json
{
  "email": "test@example.com",
  "password": "123456"
}
`

GET /api/v1/users/:id
Retourne un utilisateur.

Erreurs
Format standard :
`json
{
  "error": "Bad Request",
  "message": "Invalid payload",
  "statusCode": 400
}
`
`

---
