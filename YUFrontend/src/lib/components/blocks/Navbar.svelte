<script>
	import { Button, Navbar, NavBrand, NavHamburger, NavUl } from 'flowbite-svelte';
	import logo from '../../images/blanklogotransparent.png';
	import LoginMini from '../LoginMini.svelte';
	import ProfileDash from '../ProfileDash.svelte';
	import SwitchButton from '../miniponents/SwitchButton.svelte';
	import SiteInfoNav from '$lib/components/blocks/SiteInfoNav.svelte';
	import Notifications from '$lib/components/miniponents/Notifications.svelte';
	import MessageNotification from '$lib/components/miniponents/MessageNotification.svelte';
	import { MainThemeColors } from '$lib/stores/styling.svelte.js';

	let { user = null } = $props();

	let loginOpen = $state(false);
	let authed = $derived(Boolean(user));
</script>

<div class="relative min-w-full flex-grow px-8">
	<Navbar class="nav" color={MainThemeColors.AccentColor} fluid>
		<NavBrand href="/" class="button">
			<img src={logo} class="me-3 h-6 sm:h-9" alt="YoUniverse logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">YoUniverse</span>
		</NavBrand>

		<NavHamburger class="w-full md:order-1 md:flex md:w-auto" />

		{#if authed}
			<NavUl>
				<SiteInfoNav />
				<SwitchButton />
				<Notifications />
				<MessageNotification />
				<form method="post" action="/logout">
					<button type="submit" class="button">Logout</button>
				</form>
			</NavUl>
			<ProfileDash />
		{:else}
			<NavUl class="NavUl">
				<Button class="button" href="/about" color={MainThemeColors.AccentColor}>About</Button>
				<Button class="button" href="/goals" color={MainThemeColors.AccentColor}>Goals</Button>
				<Button class="button" href="/announcements" color={MainThemeColors.AccentColor}>Announcements</Button>
				<Button class="button min-w-[100px]" href="/volunteeropportunities" color={MainThemeColors.AccentColor}>
					Help Out!
				</Button>
				<Button class="button" href="/donation" color={MainThemeColors.AccentColor}>Donation</Button>
				<Button class="button" href="/contact" color={MainThemeColors.AccentColor}>Contact</Button>
				<Button class="button" color={MainThemeColors.AccentColor} onclick={() => (loginOpen = !loginOpen)}>
					Login
				</Button>
			</NavUl>
		{/if}
	</Navbar>

	{#if loginOpen}
		<div class="absolute mt-2 w-64 rounded border border-gray-300 bg-white shadow-xl z-50">
			<LoginMini />
		</div>
	{/if}
</div>
