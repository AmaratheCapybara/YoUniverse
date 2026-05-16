//let { SelectedProfile = $bindable() } = $props();
import { Account } from '$lib/stores/Account.svelte.js';
import { Profile } from '$lib/stores/Profile.svelte.js';
import { Chat } from '$lib/stores/Chat.svelte.js';
import * as Themes from '$lib/stores/styling.svelte.js';
import { ScreenColors} from '$lib/stores/styling.svelte.js';
import {RandoStates} from '$lib/stores/RandomStates.svelte.js';
import tinycolor from "tinycolor2";

//import { onMount } from 'svelte';
//import { RandomStates } from '$lib/stores/RandomStates.svelte.js';


export function StartupAccount (DataFromDB) {
	Account.SelectedProfile = DataFromDB.SelectedProfile;
	Account.Fronters = DataFromDB.Fronters;
	Account.Headmates = DataFromDB.Headmates;
	Account.Profiles = DataFromDB.Profiles;
	Account.Systems = DataFromDB.Systems;
	Account.AccountName = DataFromDB.AccountName;
	Account.Age = DataFromDB.Age;
	Account.AccountBio = DataFromDB.AccountBio;
	Account.AccountType = DataFromDB.AccountType;

	console.log ("Welcome back, "+ Account.AccountName+ "!");
return Account;
}

export function ChangeProfile(NewProfileID) {
	if (NewProfileID.exists) {
		Account.SelectedProfile = Account.Profiles.filter((profile) => profile.id === NewProfileID)
			.then(
				Profile.ProfileID =Account.SelectedProfile.ProfileID,
		Profile.Name = Account.SelectedProfile.Name,
		Profile.Age = Account.SelectedProfile.Age,
		Profile.Bio = Account.SelectedProfile.Bio,
		Profile.Handle = Account.SelectedProfile.Handle,
		Profile.ProfileType = Account.SelectedProfile.ProfileType,
		Profile.Chats = Account.SelectedProfile.Chats,
		Profile.SocialID = Account.SelectedProfile.SocialID,
		Profile.FavoriteColor = Account.SelectedProfile.FavoriteColor
			)
		return Profile;

		//TODO next in function: then update to database
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
		//TODO next in function: remove from Fronters array in account (Account.Fronters)

		return Account.Fronters;
	}
}

export function ChangeButtonProfileList (NewList) {
	RandoStates.SelectedProfiles = [];
	RandoStates.SelectedProfiles = NewList;
	return RandoStates.SelectedProfiles;
}

export function SelectSender(NewSenderID) {
	if (NewSenderID !== undefined || NewSenderID !== null) {
		let Sender = Account.Profiles.find((profile) => profile.id === NewSenderID);
		return Sender;
	} else if (NewSenderID === undefined) {
		console.log('The NewSenderID is not getting into the function.');
	} else if (NewSenderID === null) {
		console.log("why is NewSenderID null?");
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

export function OpenChat (ChatID) {
RandoStates.SelectedChat = Account.Chats?.find((chat) => chat.ChatID === ChatID) ?? null;
if (!RandoStates.SelectedChat) return Chat;
Chat.ChatID = RandoStates.SelectedChat.ChatID;
Chat.AllowedSocialIDs = RandoStates.SelectedChat.AllowedSocialIDs;
Chat.MessageHistory = RandoStates.SelectedChat.MessageHistory;
Chat. isGroupChat = RandoStates.SelectedChat.isGroupChat;
Chat.Name = RandoStates.SelectedChat.Name;
Chat.SameAccountProfilesiConversation = RandoStates.SelectedChat.SameAccountProfilesiConversation
return Chat;
}
export function SortConversations() {}
export function CreateChat(NewChatFormData) {
//TODO make create chat function
}
export function AddChatParticipant() {
	//some kind of option for continuing with the previous chats message history or starting new. this would only be for group chats
	if (Chat.isGroupChat === false) {
		//todo add participant and change to isGroupTrue = true
	} else if (Chat.isGroupChat === true) {
		//todo add participant
	}
}
export function DeleteChat() {
	//todo write function delete chat from all records(profile's chat lists and wherever it was stored
}
export function CreateProfile(NewProfileForm) { //todo test to make sure it is working properly
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

export function DeleteProfile() {
	//todo write function to delete a profile
}
export function UpdateProfile() {
	//todo write function to update a profile
}





//loading page
export function VolunteerSignup() {}
export function Searching(SearchInput, list) {
	//todo write a function that searches for things
}





//color pretty
export function FindTextColor(FavoriteColor, TextColor) {
	TextColor = tinycolor.mostReadable(FavoriteColor, [
		Themes.ChangingColors.DarkmodeText,
		Themes.ChangingColors.LightmodeText
	]);
	return TextColor;
}
/*export function SetScreenMode() {
	onMount(() => {
		if (Screenmode ===  window.matchMedia('(prefers-color-scheme: dark)')) {
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
			ScreenColors.Theme ='light'
		}
		return ScreenColors;
	})

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
