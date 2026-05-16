import { authCookieName, clearAuthCookie, validateAuthToken } from '$lib/server/backend-auth.js';

export async function handle({ event, resolve }) {
	const token = event.cookies.get(authCookieName);

	event.locals.user = null;
	event.locals.authToken = token ?? null;

	if (token) {
		try {
			event.locals.user = await validateAuthToken(token);
		} catch {
			event.locals.user = null;
		}

		if (!event.locals.user) {
			clearAuthCookie(event);
			event.locals.authToken = null;
		}
	}

	return resolve(event);
}
