<script>
    import { sineIn } from 'svelte/easing';
	import {
		uiHelpers
	} from 'svelte-5-ui-lib';
    import {
        Dropdown,
		DropdownUl,
		DropdownLi,
		DropdownHeader,
		DropdownFooter,
		Avatar,
    } from 'flowbite-svelte'
	import { page } from '$app/stores';
    let { data } = $props();


	let activeUrl = $state($page.url.pathname);
    
    let dropdownUser = uiHelpers();
	let dropdownUserStatus = $state(false);
	let closeDropdownUser = dropdownUser.close;
    import LoginMini from './LoginMini.svelte';
	import {logo} from  "$lib/images/blanklogotransparent.png";
	import { BellSolid, EyeSolid } from 'flowbite-svelte-icons';
	
	
  //let authed = $state(false) // toggle login log out
    
    //for dropdown
	
	let loginOpen = $state(false);
	let menuOpen = false;
	$effect(() => {
		dropdownUserStatus = dropdownUser.isOpen;
		activeUrl = $page.url.pathname;
	});
</script>
{#if ($page.data.session)}

<div class="flex items-center space-x-1 md:order-2">
    <Avatar
        onclick={dropdownUser.toggle}
       
        dot={{ color: 'grey' }}
        src="https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"
					alt="User avatar"
    />
    <div class="relative">
        <Dropdown
            dropdownStatus={dropdownUserStatus}
            closeDropdown={closeDropdownUser}
            params={{ y: 0, duration: 200, easing: sineIn }}
            class="absolute top-[14px] -left-[110px] md:-left-[160px] "
        >
            <DropdownHeader class="px-4 py-2">
                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span class="block truncate text-sm font-medium">name@flowbite.com</span>
            </DropdownHeader>
            <DropdownUl>
                <DropdownLi href="/">Dashboard</DropdownLi>
                <DropdownLi href="/components/drawer">Drawer</DropdownLi>
                <DropdownLi href="/components/footer">Footer</DropdownLi>
                <DropdownLi href="/components">Alert</DropdownLi>
            </DropdownUl>
            <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >Sign out</DropdownFooter
            >
        </Dropdown>
    </div>
  
</div>

{:else if (!$page.data.session)}
<div class="relative">
    <button onclick={() => loginOpen = !loginOpen}>
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



<!-- Mobile menu -->
{#if menuOpen}
<div class="md:hidden mt-3 flex flex-col space-y-2">
<a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
<div class="relative">
    <button onclick={() => loginOpen = !loginOpen}>
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
{:else}
<p>Error when checking authentication. Refresh or try to login.</p>
{/if}