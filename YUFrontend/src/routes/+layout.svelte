<script>
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Navbar from '../lib/components/Navbar.svelte'
import { uiHelpers } from 'svelte-5-ui-lib';
	let { children, data } = $props();
	let navbar; 
	let loginOpen = $state(false);
	let menuOpen = $state(false);
	let opensesame = uiHelpers();
	let dropdownNotificationStatus = $state(false);
	let closeDropdownNotification = opensesame.close;
	$effect(() => {
		dropdownNotificationStatus = opensesame.isOpen;
		
		loginOpen = opensesame.isOpen;
	});
</script>
<Navbar bind:this ={navbar} {data}/>
<div class=" h-100vh  @container w-auto ">
{@render children()}
</div>
<Footer class="justify-center"></Footer>
<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
	  background-color: #050C1D;
	  background-image: url("$lib/images/starbackground.jpg");
	  background-repeat: repeat;
	  background-size: cover;
	  justify-content: stretch;
	  justify-items:stretch;
	
	}
  </style>