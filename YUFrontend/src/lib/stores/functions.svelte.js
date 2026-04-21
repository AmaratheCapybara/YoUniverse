//let { SelectedProfile = $bindable() } = $props();
import { Account } from '$lib/stores/Account.svelte.js';
import { Profile } from '$lib/stores/Profile.svelte.js';
import { Chat } from '$lib/stores/Chat.svelte.js';
import * as Themes from '$lib/stores/styling.svelte.js';
import { ScreenColors } from '$lib/stores/styling.svelte.js';

export function changeProfile(NewProfileID) {
	if (NewProfileID !== undefined || NewProfileID !== null) {
		Account.SelectedProfile = Account.Profiles.find((profile) => profile.id === NewProfileID);
		//then update to database
	} else if (NewProfileID === undefined) {
		console.log(
			'The profile you are trying to set the selected profile is not computing. Specifically it is registering as undefined'
		);
	} else if (NewProfileID === null) {
		console.log(
			'Homie G, I have no idea what you did but the profile you are trying to set the selected profile is registering as null. ' +
				'Something in the coding and setting the id you want to look up '
		);
	} else {
		console.log('Something is very busted. Look at the change profile function I guess.');
		//hi, welcome back. Something broke pretty bad, huh? -E-Dawg
	}
}

export function Add2Front(SelectedProfileID) {
	if (SelectedProfileID !== undefined || SelectedProfileID !== null) {
		let FoundProfile = Account.Profiles.find((profile) => profile.id === SelectedProfileID);
		Account.Fronters.push(FoundProfile);

		return Account.Fronters;
	}

	//debugging instructions for Aurora and others who may need it (no judgments)
	else if (SelectedProfileID === undefined) {
		console.log('The ProfileID is not getting into the function.');
	} else if (SelectedProfileID === null) {
		console.log(
			'Adding to the Front is very fucked up. The Selected Profile ID that goes into the function Add2Front has been nullified.'
		);
	}
}

export function RemoveFromFront(SelectedProfileID) {
	if (SelectedProfileID !== undefined || SelectedProfileID !== null) {
		let FoundProfile = Account.Profiles.find((profile) => profile.id === SelectedProfileID);
		//remove from Fronters array in account (Account.Fronters)

		return Account.Fronters;
	}
}
export function SelectSender(NewSenderID) {
	if (NewSenderID !== undefined || NewSenderID !== null) {
		let Sender = Account.Profiles.find((profile) => profile.id === NewSenderID);
		return Sender;
	} else if (NewSenderID === undefined) {
		console.log('The NewSenderID is not getting into the function.');
	} else if (NewSenderID === null) {
	}
}
export function SendMessage(Sender, messageInput) {
	if (messageInput !== undefined || messageInput !== null) {
	}
	if (messageInput === true && Sender.name !== 'Sender') {
		Chat.MessageHistory = [
			...Chat.MessageHistory,
			{
				sender: Sender,
				text: messageInput,
				timestamp: new Date()
			}
		];
		return Chat.MessageHistory;
	}
}

export function CreateChat(FormData) {}
export function AddChatParticipant() {
	//some kind of option for continuing with the previous chats message history or starting new. this would only be for group chats
	if (Chat.isGroupChat === false) {
	} else if (Chat.isGroupChat === true) {
	}
}
export function DeleteChat() {}
export function CreateProfile() {}
export function DeleteProfile() {}
export function UpdateProfile() {}

//loading page
export function VolunteerSignup() {}
export function Searching(SearchInput, list) {}

//color pretty
export function FindTextColor(FavoriteColor, TextColor) {
	TextColor = tinycolor.mostReadable(FavoriteColor, [
		Themes.ChangingColors.DarkmodeText,
		Themes.ChangingColors.LightmodeText
	]);
	return TextColor;
}
/*export function SetScreenMode() {
	if (Screenmode === window.matchMedia('(prefers-color-scheme: dark)')) {
		ScreenColors.BackgroundColor = Themes.ChangingColors.DarkmodeBackground;
		ScreenColors.TextColor = Themes.ChangingColors.DarkmodeText;
		ScreenColors.Theme ='dark'
		console.log('Screenmode set to ', ScreenColors.Theme);
	}
	if (Screenmode === window.matchMedia('(prefers-color-scheme: light)')) {
		ScreenColors.BackgroundColor = Themes.ChangingColors.LightmodeBackground;
		ScreenColors.TextColor = Themes.ChangingColors.LightmodeText;
		ScreenColors.Theme ='light'
		console.log('Screenmode set to light', ScreenColors.Theme);
	} else {
		ScreenColors.BackgroundColor = Themes.ChangingColors.LightmodeBackground;
		ScreenColors.TextColor = Themes.ChangingColors.LightmodeText;
	}
	return ScreenColors;
}*/
export function ChangeScreenMode() {
	if (ScreenColors.Theme === 'dark') {
		ScreenColors.BackgroundColor = Themes.ChangingColors.LightmodeBackground;
		ScreenColors.TextColor = Themes.ChangingColors.LightmodeText;
		ScreenColors.Theme = 'light';
		console.log('Screenmode set to light', ScreenColors.Theme);
	}
	if (ScreenColors.Theme === 'light') {
		ScreenColors.BackgroundColor = Themes.ChangingColors.DarkmodeBackground;
		ScreenColors.TextColor = Themes.ChangingColors.DarkmodeText;
		ScreenColors.Theme = 'dark';
		console.log('Screenmode set to ', ScreenColors.Theme);
	} else {
	SetScreenMode();
	}
	return ScreenColors
}