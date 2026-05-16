# YoUniverse
A project that aims to create the first social media site with plurals and their loved ones in mind.

## Development

1. Put the backend secrets in `backend/.env`.
   - `DB` should be the Neon Postgres connection string.
   - `REDIS_REST_URL` and `REDIS_REST_TOKEN` can stay blank for now.
2. From the project root, run:

```bash
npm run dev
```

On macOS/Linux you can also run:

```bash
./dev.sh
```

The script starts both apps:

- Backend: `http://127.0.0.1:3000`
- Frontend: `http://127.0.0.1:5173`

Press `Ctrl+C` in that terminal to stop both.

The npm script uses Node.js instead of Bash, so it works on Windows too.
