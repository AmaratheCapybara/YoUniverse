<script>
    import { 
        Button,
        Navbar, 
        NavBrand, 
        NavUl, 
        NavLi, 
        uiHelpers, 
        NavHamburger,
		Dropdown,
		DropdownHeader,
		DropdownUl,
		DropdownLi,
		Avatar,
		DropdownFooter, 
        Search,
		Checkbox, } from 'svelte-5-ui-lib';
	import { page } from '$app/stores';
    import Switch from './SwitchButton.svelte';
    import ProfileDash from './ProfileDash.svelte';
	let activeUrl = $state($page.url.pathname);
    import { sineIn } from 'svelte/easing';
    //import * as Icon from 'flowbite-svelte-icons';
    //import * as comp from 'svelte-5-ui-lib';
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	$effect(() => {
		navStatus = nav.isOpen;
		activeUrl = $page.url.pathname;
	});

</script>
<div class="relative">
<Navbar {toggleNav}  {navStatus} breakPoint="md" navClass="bg-gray-100 rounded-xl">
	{#snippet brand()}
		<NavBrand siteName="The YoUniverse">
			<!--<img width="30" src="../../lib/images/blanklogotransparent.png" alt="site icon" />-->
		</NavBrand>
	{/snippet}
   
<NavUl class="order-1" {activeUrl}>
    <NavLi href="/">Home</NavLi>
  
        <Switch/>
</NavUl>
<ProfileDash/>
</Navbar>
</div>
