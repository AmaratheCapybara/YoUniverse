import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals, url }) {
	if (!locals.user) {
		const redirectTo = `${url.pathname}${url.search}`;
		redirect(303, `/auth?redirectTo=${encodeURIComponent(redirectTo)}`);
	}

	return {
		user: locals.user
	};
}
