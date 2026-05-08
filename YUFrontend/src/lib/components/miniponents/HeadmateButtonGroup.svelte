 <script>
	 import {
		 ButtonGroup,
			 Avatar
	 } from "flowbite-svelte";
	 import {FindTextColor} from "$lib/stores/functions.svelte.js";
	 import BluePlanet from '$lib/images/Assets/blue transparent.png';
	 import HappyMoon from '$lib/images/Assets/happy moon.png';
	 import Ice from '$lib/images/Assets/ice transparent.png';
	 import Life from '$lib/images/Assets/life transparency.png';
	 import Terrestrial from '$lib/images/Assets/terrestrial transparency.png';
	 let {Profiles = undefined} =$props();
const bodies = [Happy, blue, green, cold, rocks]

	 function pick(array) {
		 const index = Math.floor(Math.random() * array.length);
		 return array[index];
	 }
 </script>
 {#snippet Happy()}
<Avatar src={HappyMoon}></Avatar>
	 {/snippet}
 {#snippet blue()}
	 {BluePlanet}
	 {/snippet}
 {#snippet green()}
	 {Life}
	 {/snippet}
 {#snippet cold()}
	 {Ice}
	 {/snippet}
 {#snippet rocks()}
	 {Terrestrial}
	 {/snippet}
<ButtonGroup>
	{#if (Profiles===undefined||[])}
		{@render pick(bodies)}
		{:else if (Profiles.exists && Profiles.exists.length>0)}
				{#each Profiles as sender}
					<!-- Button with dynamically applied background color -->
					<button
						class="sender-button {sender === senderInput ? 'active' : ''}"
						onclick={() => setSender(sender)}
						style="color:{FindTextColor(sender.FavoriteColor)}"
					>
						<span>{sender.Name}</span>
						<Avatar size="md" src={sender.ProfilePic} alt={sender.Name} rounded />
					</button>
				{/each}
	{/if}
			</ButtonGroup>