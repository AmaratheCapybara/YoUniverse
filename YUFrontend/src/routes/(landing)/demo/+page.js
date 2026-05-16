import {Account} from '$lib/stores/Account.svelte.js';
import {Profile} from '$lib/stores/Profile.svelte.js';

/** @type {import('./$types').PageLoad} */
export function load() {
	return { Account, Profile };
}
