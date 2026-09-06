# API Usage

Base URL: `http://localhost:3000`

## Health
`GET /health`

## Catalog
- `GET /api/systems`
- `GET /api/modules`

## Build
Create:
```http
POST /api/builds
Content-Type: application/json

{"name":"Demo CRM","source":"custom"}
```

Compose:
```http
POST /api/builds/{id}/compose
Content-Type: application/json

{"moduleIds":["customer-records","sales-pipeline"]}
```

Configure:
```http
POST /api/builds/{id}/configure
Content-Type: application/json

{"configuration":{"currency":"IDR"}}
```

Validate:
`POST /api/builds/{id}/validate`

Prepare deployment/export:
```http
POST /api/builds/{id}/deploy
Content-Type: application/json

{"target":"export"}
```

## Run
```bash
npm test
npm start
```

The first implementation uses in-memory persistence; replacing it with a production repository is intentionally isolated behind the repository boundary.
