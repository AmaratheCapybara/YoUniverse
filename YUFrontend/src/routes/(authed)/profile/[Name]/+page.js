/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		Name: decodeURIComponent(params.Name)
	};
}
