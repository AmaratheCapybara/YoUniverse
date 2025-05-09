/** @type {import('./$types').LayoutServerLoad} */
import { redirect } from '@sveltejs/kit';


export async function load({cookies, url}) {

if(!cookies.get('logged_in')) {
    redirect(303, '/demo/lucia/login?redirectTo=${url.pathname}')
}
    
    return {};
}