<script>
	import {
		Avatar, 
		Dropdown,
		DropdownUl,
		DropdownLi,
		DropdownHeader,
		DropdownFooter,
		MegaMenu,
		
		Button,
		Navbar,
		NavBrand, NavHamburger, NavUl, NavLi,} from 'flowbite-svelte';
		
	import LoginMini from './LoginMini.svelte';
	import {logo} from  
	'../images/blanklogotransparent.png';
	import { BellSolid, EyeSolid, MessageCaptionSolid } from 'flowbite-svelte-icons';
	//for dropdown
	import { sineIn } from 'svelte/easing';
import {page} from '$app/stores';
	import ProfileDash from './ProfileDash.svelte';
	import SwitchButton from './SwitchButton.svelte';
	let { data } = $props();


	let session = $derived($page.data.session);
	let authed =  $state(false);
	let loginOpen = $state(false);
	let menuOpen = $state(false);
	let opensesame = $state();
	let dropdownNotificationStatus = $state(false);
	let closeDropdownNotification = opensesame.close;
	$effect(() => {
		dropdownNotificationStatus = opensesame.isOpen;
		
		//loginOpen = opensesame.isOpen;

	});
</script>

<Navbar class="bg-[#77B602] px-4 py-3 rounded-xl shadow-md ">
	<div class="max-w-7xl mx-auto flex  justify-between justify-items-evenly">
		<!-- Brand -->
		<NavBrand href="/">
			<img src={logo} class="me-3 h-6 sm:h-9" alt="YoUniverse logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>YoUniverse</span
			>
		</NavBrand>
	<!--<ProfileDash ></ProfileDash>-->
		<NavHamburger class="w-full md:flex md:w-auto md:order-1" />
		<!-- Hamburger (mobile only) -->
		
		{#if (!$page.data.session)}
		
		</div>
{:else if ($page.data.session)}
<NavHamburger/>
<NavUl class="cursor-pointer" onclick={() => (open = true)}>
	<SwitchButton/>
</NavUl>
		{/if}



		<ProfileDash bind:this={loginOpen} {data}/>
	


	<!-- Mobile menu -->
	{#if (menuOpen===true)}
		<div class="md:hidden mt-3 flex flex-col space-y-2">
			 
			<div class="relative">
				<button onclick={loginOpen.toggle}>
				h
				</button>

				{#if (loginOpen===true)}
					<div class="absolute mt-2 w-64 bg-white border border-gray-300 shadow-xl rounded z-50">
						<LoginMini />
					</div>
				{/if}
			</div>
		</div>
	{/if}

	
	</Navbar>
