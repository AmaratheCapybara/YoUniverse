 <script>
	 import {
		 ButtonGroup,
			 Avatar
	 } from "flowbite-svelte";
	 import BluePlanet from '$lib/images/Assets/blue transparent.png';
	 import HappyMoon from '$lib/images/Assets/happy moon.png';
	 import Ice from '$lib/images/Assets/ice transparent.png';
	 import Life from '$lib/images/Assets/life transparency.png';
	 import Terrestrial from '$lib/images/Assets/terrestrial transparency.png';
	 let {Profiles} =$props();
 </script>
 {#snippet HappyMoon()}

	 {/snippet}
 {#snippet blue()}
	 {BluePlanet}
	 {/snippet}
<ButtonGroup>
				{#each Profiles as sender}
					<!-- Button with dynamically applied background color -->
					<button
						class="sender-button {sender === senderInput ? 'active' : ''}"
						onclick={() => setSender(sender)}
						style="background-color: {sender.FavoriteColor}"
					>
						<span>{sender.Name}</span>
						<Avatar size="md" src={sender.ProfilePic} alt={sender.Name} rounded />
					</button>
				{/each}
			</ButtonGroup>