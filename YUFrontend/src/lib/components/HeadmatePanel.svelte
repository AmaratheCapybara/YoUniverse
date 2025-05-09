<script>
import { 
Button, 
ButtonGroup, 
Accordion, 
AccordionItem, 
Search, 
Avatar 
} from 'flowbite-svelte';
import HeadmateButtonGroup from ''
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
			{#each System as system}
			<Button color={system.FavoriteColor}>{system.Name} <Avatar src={system.ProfilePic}/></Button>
			
			{/each}
		</ButtonGroup>
	</AccordionItem>
</Accordion>