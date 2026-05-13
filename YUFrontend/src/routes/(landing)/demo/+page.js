import { Chat } from '$lib/stores/Chat.svelte.js';
import {Account} from '$lib/stores/Account.svelte.js';
import {Profile} from '$lib/stores/Profile.svelte.js';
import { ChangeProfile, StartupAccount } from '$lib/stores/functions.svelte.js';

import {db } from './DemoData/database.js'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	StartupAccount(db.Account);
ChangeProfile(db.Account.SelectedProfile);


	console.log(Account.SelectedProfile)
return { Account, Profile };

}
