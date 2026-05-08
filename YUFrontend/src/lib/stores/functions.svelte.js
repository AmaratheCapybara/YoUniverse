//let { SelectedProfile = $bindable() } = $props();
import { Account } from '$lib/stores/Account.svelte.js';
import { Profile } from '$lib/stores/Profile.svelte.js';
import { Chat } from '$lib/stores/Chat.svelte.js';
import * as Themes from '$lib/stores/styling.svelte.js';
import { ScreenColors } from '$lib/stores/styling.svelte.js';
import tinycolor from "tinycolor2";

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
export async function SendMessage(messageInput) {
	if (!messageInput.exists) { //TODO figure out why the messageInput isn't making it into the function
		const ErrorMessage = "hol' up buckaroo. I ain't getting ya' fancy letter";
		console.log(ErrorMessage);
		return;

	}
	if (!messageInput.Sender.exists) {
		const ErrorMessage= 'who You?';
		console.log(ErrorMessage);
		return;
	}
	if (messageInput.Sender.exists) {
	const	MessageID = crypto.randomUUID();
let NewMessage = {
	MessageID: MessageID,
	Sender: messageInput.Sender,
	Timestamp: new Date(),
	Text: messageInput.messageText

}
Chat.MessageHistory.push(NewMessage);
console.log(NewMessage);
	}
}

export function CreateChat(NewChatFormData) {

}
export function AddChatParticipant() {
	//some kind of option for continuing with the previous chats message history or starting new. this would only be for group chats
	if (Chat.isGroupChat === false) {
	} else if (Chat.isGroupChat === true) {
	}
}
export function DeleteChat() {}
export function CreateProfile(NewProfileForm) {
	const SocialID = crypto.randomUUID();
	const ProfileID = crypto.randomUUID();

	if (NewProfileForm === undefined || NewProfileForm === null) {
		const ErrorMessage = "ain't getting the new profile form, chief";
		console.log({ ErrorMessage });
		return ErrorMessage;
	}
	if (NewProfileForm.exists) {
		let NewProfile = {
			ProfileID: ProfileID,
			SocialID: SocialID,
			Name: NewProfileForm.name,
			Handle: NewProfileForm.Handle,
			Age: NewProfileForm.Age,
			Maturity: NewProfileForm.Maturity,
			ProfileType: NewProfileForm.ProfileType,
			Bio: NewProfileForm.Bio,
			FavoriteColor: NewProfileForm.FavoriteColor,
			ProfilePic: NewProfileForm.ProfilePic,
			Friends:[],
			Chats: [],
			Feed: [],
			Notifications: [],
			Systems: [],
			PSettings: {}
		}
		const SuccessMessage = 'Successfully created Profile. Welcome to YoUniverse!';
		console.log(SuccessMessage);
		Account.Profiles.push(NewProfile.ProfileID);
		return NewProfile;
	}
}

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