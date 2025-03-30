# HOW TO USE

1. Run `cp .env.sample .env && yarn install && ./scripts/start.sh && yarn db:seed`
2. Visit `http://localhost:3000/docs/swagger`

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
