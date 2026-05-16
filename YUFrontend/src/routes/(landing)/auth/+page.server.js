import { fail, redirect } from '@sveltejs/kit';
import { loginUser, registerUser, setAuthCookie } from '$lib/server/backend-auth.js';

function getString(formData, key) {
	const value = formData.get(key);
	return typeof value === 'string' ? value.trim() : '';
}

function safeRedirectTo(value) {
	if (!value || !value.startsWith('/') || value.startsWith('//')) return '/headmateslist';
	if (value.startsWith('/auth')) return '/headmateslist';
	return value;
}

function getValues(formData) {
	return {
		email: getString(formData, 'email'),
		username: getString(formData, 'username')
	};
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, url }) {
	if (locals.user) {
		redirect(303, safeRedirectTo(url.searchParams.get('redirectTo')));
	}

	return {
		redirectTo: safeRedirectTo(url.searchParams.get('redirectTo'))
	};
}

export const actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const username = getString(formData, 'username');
		const password = getString(formData, 'password');
		const redirectTo = safeRedirectTo(getString(formData, 'redirectTo'));

		if (!username || !password) {
			return fail(400, {
				mode: 'login',
				message: 'Username and password are required.',
				values: getValues(formData)
			});
		}

		let result;

		try {
			result = await loginUser({ username, password });
		} catch (error) {
			return fail(500, {
				mode: 'login',
				message: error instanceof Error ? error.message : 'Login failed.',
				values: getValues(formData)
			});
		}

		if (!result.ok) {
			return fail(400, {
				mode: 'login',
				message: result.message,
				values: getValues(formData)
			});
		}

		setAuthCookie(event, result.token);
		redirect(303, redirectTo);
	},

	register: async (event) => {
		const formData = await event.request.formData();
		const email = getString(formData, 'email').toLowerCase();
		const username = getString(formData, 'username');
		const password = getString(formData, 'password');
		const redirectTo = safeRedirectTo(getString(formData, 'redirectTo'));

		if (!email || !username || !password) {
			return fail(400, {
				mode: 'register',
				message: 'Email, username, and password are required.',
				values: getValues(formData)
			});
		}

		let result;

		try {
			result = await registerUser({ email, username, password });
		} catch (error) {
			return fail(500, {
				mode: 'register',
				message: error instanceof Error ? error.message : 'Registration failed.',
				values: getValues(formData)
			});
		}

		if (!result.ok) {
			return fail(400, {
				mode: 'register',
				message: result.message,
				values: getValues(formData)
			});
		}

		setAuthCookie(event, result.token);
		redirect(303, redirectTo);
	}
};
