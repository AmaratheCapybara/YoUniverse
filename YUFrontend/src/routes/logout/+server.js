import { redirect } from '@sveltejs/kit';
import { clearAuthCookie } from '$lib/server/backend-auth.js';

export async function POST(event) {
	clearAuthCookie(event);
	redirect(303, '/');
}
