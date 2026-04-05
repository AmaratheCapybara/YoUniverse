import { defineConfig } from 'drizzle-kit';
import  env  from '$env/static/private';



export default defineConfig({
	schema: './src/lib/server/db/schema.js',
	dbCredentials: { url: env.DATABASE_URL},
	verbose: true,
	strict: true,
	dialect: 'postgresql'
});