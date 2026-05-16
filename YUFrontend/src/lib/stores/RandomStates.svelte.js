import { MainThemeColors } from '$lib/stores/styling.svelte.js';

import blanklogotransparent from '$lib/images/blanklogotransparent.png';
let Sender =$state({
	SocialID: undefined,
	ProfileID: undefined,
	Name:"Sender",
	FavoriteColor: MainThemeColors.AccentColor,
	ProfilePic: blanklogotransparent

});
 let SelectedProfiles=$state();

 let SelectedChat=$state();

export const RandoStates = {
Sender,
	SelectedProfiles
}
