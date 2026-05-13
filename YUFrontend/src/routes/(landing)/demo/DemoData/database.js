import * as Account from './Account.json';
import * as Profiles from './Profiles.json'
import * as Chats from './Chats.json';

export const db ={
	Account: Account,
	Profiles: Profiles,
	Chats: Chats
   // functions: [managefronters(), managesystems(),manageheadmates(), setChat()]
}

/*export async function manageselectedprofile (ProfileID) {
    if (db.Account.SelectedProfile === null || undefined) {
        db.Account.SelectedProfile = db.Profiles((Profile)=>{Profile.ProfileID === ProfileID});
    }
    else {
        db.Account.SelectedProfile = db.Profiles((Profile)=>{Profile.ProfileID === "0"});
    }
}
export async function manageheadmates () {
	//db.Account.Headmates = db.Profiles.map((Profile)=>{Profile.ProfileType !== "System"});
}
export async function managesystems () {
//	db.Account.Systems = db.Profiles.map((Profile)=>{Profile.ProfileType === "System"});
}
export async function managefronters () {

}
export async function setChat (SelectedProfile, SelectedChat, SelectedCID) {

	if (SelectedChat === null || undefined) {
		SelectedChat = db.Account.SelectedProfile.Chats[0];


	}
	else if (SelectedChat !== null || undefined) {
		SelectedChat = SelectedProfile.Chats.find((Chat)=>Chat.id === SelectedChat);
	}

	return SelectedChat;
}*/