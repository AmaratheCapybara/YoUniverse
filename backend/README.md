# Backend

For normal development, use the root launcher instead:

```bash
npm run dev
```

Run that from the project root. It builds this backend and starts it with the frontend. The backend reads `backend/.env`; set `DB` to the Neon Postgres connection string.

Visit `http://localhost:3000/docs/swagger` after the backend starts.

## TEST COMMANDS

```bash
curl --location 'http://localhost:3000/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "example@email.com",
    "username": "username",
    "password": "123456"
}'
```

```bash
curl --location 'http://localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "username",
    "password": "123456"
}'
```
