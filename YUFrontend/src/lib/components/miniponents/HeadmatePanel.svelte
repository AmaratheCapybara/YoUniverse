<script>
import { 
Button, 
ButtonGroup, 
Accordion, 
AccordionItem, 
Search, 
Avatar 
} from 'flowbite-svelte';
import HeadmateButtonGroup from '$lib/components';
import {Account} from "$lib/stores/Account.svelte.js";
import {Chat} from "$lib/stores/Chat.svelte.js";
import {Profiles} from '../../../routes/(landing)//demo/DemoData/Profiles.json'
import {ChangeButtonProfileList} from "$lib/stores/functions.svelte.js";
let {
    FavoriteColor,
    ProfilePic,
    Name,
    senderInput,
    setSender,
    sendMessage,
    sender,
    text,
    timestamp,
ProfileList=$bindable()} = $props();
let Fronters = Account.Fronters;
let Systems = Account.Profiles.filter((profiles)=> profiles.ProfileType === "System");
let SpaceStations= ["Leaders", "Frequent Fronters", "Bonnie's Parts"];
const Participants = Profiles.filter((profile)=> profile.SocialID === Chat.AllowedSocialIDs);
$effect(()=> {


})
</script>

{#snippet ProfileListButtons(Name, ProfileList)}
<Button onclick={()=>{ChangeButtonProfileList(Participants)}}>
	{Name}
</Button>
	{/snippet}

		<div id="ButtonRow">
		<HeadmateButtonGroup/>
		</div>
<Accordion>
	<AccordionItem>
		<ButtonGroup>
			{@render ProfileListButtons("In Conversation", Chat.SameAccountProfilesinConversation)}

			{@render ProfileListButtons("Fronting", Fronters)}
			{@render ProfileListButtons("All Profiles", Account.Profiles)}
			

			<!--
			{#each SpaceStations as SpaceStation}
			<Button color={SpaceStation.FavoriteColor}>{SpaceStation.Name} <Avatar src={SpaceStation.ProfilePic}/></Button>
			{/each}
			{#each Systems as system}
			<Button color={system.FavoriteColor}>{system.Name} <Avatar src={system.ProfilePic}/></Button>
			
			{/each}-->

		</ButtonGroup>
	</AccordionItem>
</Accordion>