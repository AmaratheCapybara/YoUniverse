import { Account } from '$lib/stores/Account.svelte.js';
let {SelectedProfile=$bindable()} =$props()


export function changeProfile(NewProfileID) {
	if (NewProfileID !== undefined || NewProfileID !== null) {
	SelectedProfile = Account.Profiles.find((profile)=>profile.id === NewProfileID);
	//then update to database
	}
	else if (NewProfileID === undefined) {
		console.log("The profile you are trying to set the selected profile is not computing. Specifically it is registering as undefined");
	}
	else if (NewProfileID === null) {
		console.log('Homie G, I have no idea what you did but the profile you are trying to set the selected profile is registering as null. Something in the coding and setting the id you want to look up ');
	}
		else {
			console.log("Something is very busted. Look at the change profile function I guess.")
		//hi, welcome back. Something broke pretty bad, huh? -E-Dawg
	}
};

export function Add2Front(SelectedProfileID) {
	if (SelectedProfileID !== undefined || SelectedProfileID !== null) {
		let FoundProfile = Account.Profiles.find((profile)=>profile.id === SelectedProfileID);
		Account.Fronters.push(FoundProfile);
	}
	else if (SelectedProfileID === undefined) {

	}
	else if (SelectedProfileID === null) {

	}
}