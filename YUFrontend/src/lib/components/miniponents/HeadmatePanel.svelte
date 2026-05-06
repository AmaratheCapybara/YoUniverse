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
let {
    FavoriteColor,
    ProfilePic,
    Name,
    senderInput,
    setSender,
    sendMessage,
    sender,
    text,
    timestamp
} = $props();
let Systems =Account.Profiles.filter((profiles)=> profiles.ProfileType === "System");
let SpaceStations= ["Leaders", "Frequent Fronters", "Bonnie's Parts"]
</script>

		<div id="ButtonRow">
		<HeadmateButtonGroup/>
		</div>
<Accordion>
	<AccordionItem>
		<ButtonGroup>
			<Button>
				In Conversation
			</Button>
			<Button>
				Fronting
			</Button>
			{#each SpaceStations as SpaceStation}
			<Button color={SpaceStation.FavoriteColor}>{SpaceStation.Name} <Avatar src={SpaceStation.ProfilePic}/></Button>
			{/each}
			{#each Systems as system}
			<Button color={system.FavoriteColor}>{system.Name} <Avatar src={system.ProfilePic}/></Button>
			
			{/each}
		</ButtonGroup>
	</AccordionItem>
</Accordion>