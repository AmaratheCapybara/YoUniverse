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
		import {uiHelpers} from "svelte-5-ui-lib";
	import LoginMini from './LoginMini.svelte';
	import {logo} from  "$lib/images/blanklogotransparent.png";
	import { BellSolid, EyeSolid, MessageCaptionSolid } from 'flowbite-svelte-icons';
	//for dropdown
	import { sineIn } from 'svelte/easing';
	import ProfileDash from './ProfileDash.svelte';
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

<Navbar class="bg-[#77B602] px-4 py-3 rounded-xl shadow-md">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
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
		<button
			class="md:hidden text-gray-600"
			onclick={menuOpen.toggle}
			aria-label="Toggle menu"
		>
			☰
		</button>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center space-x-6">
			<MegaMenu></MegaMenu>
			<a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
			<Button><MessageCaptionSolid/></Button>

			<!-- Avatar dropdown -->
			<div class="relative">
				<button onclick={loginOpen.toggle}>
					<img
						class="w-8 h-8 rounded-full cursor-pointer"
						src="https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"
						alt="User avatar"
					/>
				</button>

				{#if loginOpen===true}
					<div class="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-xl rounded z-50">
						<LoginMini />
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if (menuOpen===true)}
		<div class="md:hidden mt-3 flex flex-col space-y-2">
			<a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
			<div class="relative">
				<button onclick={loginOpen.toggle}>
					<img
						class="w-8 h-8 rounded-full cursor-pointer"
						src="https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"
						alt="User avatar"
					/>
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
