 <script>
	 import {
		 ButtonGroup,
			 Button,
			 Avatar
	 } from "flowbite-svelte";
	 import {FindTextColor} from "$lib/stores/functions.svelte.js";
	 import BluePlanet from '$lib/images/Assets/blue transparent.png';
	 import HappyMoon from '$lib/images/Assets/happy moon.png';
	 import Ice from '$lib/images/Assets/ice transparent.png';
	 import Life from '$lib/images/Assets/life transparency.png';
	 import Terrestrial from '$lib/images/Assets/terrestrial transparency.png';
	 import {SelectSender} from "$lib/stores/functions.svelte.js";
	 import {RandoStates} from "$lib/stores/RandomStates.svelte.js";

	 //let {Profiles = undefined} = $props();
const bodies = [HappyMoon, Ice, Life, BluePlanet, Terrestrial];
let Profiles =$derived(RandoStates.SelectedProfiles);
	function pick(bodies) {
		 const index = Math.floor(Math.random() * bodies.length);
		 console.log(bodies[index]);
		 return bodies[index];

	 }

 </script>
 {#snippet DummyButtons(SVG)}
<Avatar src={SVG}></Avatar>
	 {/snippet}
<ButtonGroup>
	{#if (Profiles===undefined||[])}
undefined

		{:else if (Profiles.exists && Profiles.exists.length>0)}
				{#each Profiles as sender}
					<!-- Button with dynamically applied background color -->
					<button
						class="sender-button {sender === senderInput ? 'active' : ''}"
						onclick={() => SelectSender(sender.ProfileID)}
						style="color:{FindTextColor(sender.FavoriteColor)}"
					>
						<span>{sender.Name}</span>
						<Avatar size="md" src={sender.ProfilePic} alt={sender.Name} rounded />
					</button>
				{/each}


	{/if}
			</ButtonGroup>
 <button>test</button>