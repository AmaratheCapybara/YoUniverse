import { writable } from 'svelte/store';

export const user = writable(null);

export function setUser(u) {
	user.set(u);
}
