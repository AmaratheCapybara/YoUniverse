const BASE_URL = 'http://localhost:3000/users';

export async function register({ email, username, password }) {
	const res = await fetch(`${BASE_URL}/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, username, password })
	});

	if (!res.ok) {
		const error = await res.json().catch(() => ({}));
		throw new Error(error.message || 'Registration failed');
	}

	return await res.json();
}

export async function login({ username, password }) {
	const res = await fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	});

	if (!res.ok) {
		const error = await res.json().catch(() => ({}));
		throw new Error(error.message || 'Login failed');
	}

	return await res.json();
}
