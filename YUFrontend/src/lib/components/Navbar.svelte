<script>
	import {
		Avatar, 
		Dropdown,
		DropdownUl,
		DropdownLi,
		DropdownHeader,
		DropdownFooter,
		MegaMenu,
		uiHelpers} from 'svelte-5-ui-lib';
	import LoginMini from './LoginMini.svelte';
	import {logo} from  "$lib/images/blanklogotransparent.png";
	import { BellSolid, EyeSolid } from 'flowbite-svelte-icons';
	//for dropdown
	import { sineIn } from 'svelte/easing';
	let loginOpen = false;
	let menuOpen = false;
</script>

<nav class="bg-[#77B602] px-4 py-3 rounded-xl shadow-md">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<!-- Brand -->
		 <img width="30" src = {logo} alt="logo"/>
		 
		<a href="/" class="text-xl font-bold text-gray-800">The YoUniverse</a>

		<!-- Hamburger (mobile only) -->
		<button
			class="md:hidden text-gray-600"
			on:click={() => menuOpen = !menuOpen}
			aria-label="Toggle menu"
		>
			☰
		</button>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center space-x-6">
			<MegaMenu></MegaMenu>
			<a href="/" class="text-gray-700 hover:text-blue-500">Home</a>

			<!-- Avatar dropdown -->
			<div class="relative">
				<button on:click={() => loginOpen = !loginOpen}>
					<img
						class="w-8 h-8 rounded-full cursor-pointer"
						src="https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"
						alt="User avatar"
					/>
				</button>

				{#if loginOpen}
					<div class="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-xl rounded z-50">
						<LoginMini />
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="md:hidden mt-3 flex flex-col space-y-2">
			<a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
			<div class="relative">
				<button on:click={() => loginOpen = !loginOpen}>
					<img
						class="w-8 h-8 rounded-full cursor-pointer"
						src="https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"
						alt="User avatar"
					/>
				</button>

				{#if loginOpen}
					<div class="absolute mt-2 w-64 bg-white border border-gray-300 shadow-xl rounded z-50">
						<LoginMini />
					</div>
				{/if}
			</div>
		</div>
	{/if}
</nav>
