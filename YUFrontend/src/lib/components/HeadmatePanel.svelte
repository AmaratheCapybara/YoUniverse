<script>
import { 
Button, 
ButtonGroup, 
Accordion, 
AccordionItem, 
Search, 
Avatar 
} from 'flowbite-svelte';
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
<Accordion>
	<AccordionItem>
		<span slot="header">In conversation</span>
		<div id="ButtonRow">
			<ButtonGroup>
				{#each Profiles as sender}
					<!-- Button with dynamically applied background color -->
					<button
						class="sender-button {sender === senderInput ? 'active' : ''}"
						on:click={() => setSender(sender)}
						style="background-color: {sender.FavoriteColor}"
					>
						<span>{sender.Name}</span>
						<div><Avatar size="md" src={sender.ProfilePic} alt={sender.Name} rounded /></div>
					</button>
				{/each}
			</ButtonGroup>
		</div>
	</AccordionItem>
</Accordion>