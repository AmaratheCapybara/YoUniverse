<script>
	import {
		Avatar, 
		Dropdown,
		DropdownItem,
		DropdownHeader,
		Footer,
		MegaMenu,
		
		Button,
		Navbar,
		NavBrand, NavHamburger, NavUl, NavLi,} from 'flowbite-svelte';
		import {Account} from "$lib/stores/Account.svelte.js";
	import LoginMini from './LoginMini.svelte';
	//import {logo} from '../images/blanklogotransparent.png';
	import { BellSolid, EyeSolid, MessageCaptionSolid } from 'flowbite-svelte-icons';
	//for dropdown
	import { sineIn } from 'svelte/easing';
//import {page} from '$app/state';
	import logo from "../images/blanklogotransparent.png";
	import ProfileDash from './ProfileDash.svelte';
	import SwitchButton from './SwitchButton.svelte';
	import {MainThemeColors} from "$lib/stores/styling.svelte.js";
	let { data} = $props();


	//let session = $derived($page.data.session);
	let authed =  $state(false);
	let loginOpen = $state(false);
	let menuOpen = $state(false);
	let opensesame = $state();
	let dropdownNotificationStatus = $state(false);
	let closeDropdownNotification = opensesame;

</script>
<div class="relative px-8 flex-grow min-w-full">
<Navbar class="nav" color={MainThemeColors.AccentColor} fluid>
		<!-- Brand -->
		<NavBrand href="/"  class="button">
			<img src={logo} class="me-3 h-6 sm:h-9" alt="YoUniverse logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>YoUniverse</span
			>
		</NavBrand>
	<!--<ProfileDash ></ProfileDash>-->
		<NavHamburger class="w-full md:flex md:w-auto md:order-1" />
		<!-- Hamburger (mobile only) -->
		
	<!--	{#if (!$page.data.session)}
		
	<h1>test</h1>
{:else if ($page.data.session)}
<NavHamburger/>
<NavUl class="cursor-pointer" onclick={() => (open = true)}>
	<SwitchButton/>
</NavUl>
		{/if}

-->
	<NavUl>
<Button class="button" href="./about" color={MainThemeColors.AccentColor}>About</Button>
	<Button class="button" href="./goals" color={MainThemeColors.AccentColor}>Goals</Button>
	<Button class="button" href="./announcements" color={MainThemeColors.AccentColor}>Announcements</Button>
	<Button class="button" href ="./volunteeropportunities" color={MainThemeColors.AccentColor}>Help Out!</Button>
	<Button class="button" href= "./donation" color={MainThemeColors.AccentColor}>Donation</Button>
	<Button class="button" href="./contact" color={MainThemeColors.AccentColor}>Contact</Button>
		<!-- Mobile menu -->
		<!--{#if (menuOpen===true)}
            <div class="md:hidden mt-3 flex flex-col space-y-2">

                <div class="relative">
                    <button onclick={loginOpen.toggle}>
                    Login
                    </button>

                    {#if (loginOpen===true)}
                        <div class="absolute mt-2 w-64 bg-white border border-gray-300 shadow-xl rounded z-50">
                            <LoginMini />
                        </div>
                    {/if}
                </div>
            </div>
        {/if}
    -->
	</NavUl>



	
	</Navbar>
</div>