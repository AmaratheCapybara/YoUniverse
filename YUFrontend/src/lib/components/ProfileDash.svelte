<script>
    import { sineIn } from 'svelte/easing';

    import {
        Dropdown,
        DropdownItem,
        DropdownHeader,
        DropdownGroup,
        Footer,
        Avatar
    } from 'flowbite-svelte'
	import { page } from '$app/stores';
    let { data,
        SelectedProfile =
            {Name:'Profile Name', Handle:'ProfileHandle',ProfilePic:"https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"},
        Fronters =[
            {Name:'Profile Name', Handle:'ProfileHandle',ProfilePic:"https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"},
            {Name:'Profile Name 1', Handle:'ProfileHandle 1',ProfilePic:"https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"},
            {Name:'Profile Name 2', Handle:'ProfileHandle 2',ProfilePic:undefined}
        ]

    } = $props();


	let activeUrl = $state($page.url.pathname);
    

    import LoginMini from './LoginMini.svelte';
	//import {logo} from  "$lib/images/blanklogotransparent.png";
	import { BellSolid, EyeSolid } from 'flowbite-svelte-icons';
	
	
  //let authed = $state(false) // toggle login log out
    
    //for dropdown
	
	let loginOpen = $state(false);
	let menuOpen = false;

</script>
<Avatar id="DashIcon" src={SelectedProfile.ProfilePic}/>
<Dropdown triggeredBy="#DashIcon">
    <DropdownHeader>
<h1>{SelectedProfile.Name}</h1>
        <span><h2>#{SelectedProfile.Handle}</h2></span>
    </DropdownHeader>
    <DropdownGroup>
        {#each Fronters as Fronter}
            <DropdownItem>{Fronter.Name}</DropdownItem>
            {/each}
    </DropdownGroup>
    <DropdownGroup>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
    </DropdownGroup>
</Dropdown>



<!--
{#if ($page.data.session)}

<div class="flex items-center space-x-1 md:order-2">
    <Avatar
      class ='acs'
        dot={{ color: 'grey' }}
        src="https://api.dicebear.com/6.x/thumbs/svg?seed=LoginUser"
					alt="User avatar"
    />
    <div class="relative">
        <Dropdown
           triggeredBy=".acs"
            params={{ y: 0, duration: 200, easing: sineIn }}
            class="absolute top-[14px] -left-[110px] md:-left-[160px] "
        >
            <DropdownHeader class="px-4 py-2">
                <span class="block text-sm text-gray-900 dark:text-white">{SelectedProfile.Name}</span>
                <span class="block truncate text-sm font-medium">{SelectedProfile.Handle}</span>
            </DropdownHeader>
            <DropdownGroup>
                <DropdownItem>Settings</DropdownItem>
            </DropdownGroup>
            <Footer>Sign Out</Footer>
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


-->
<!-- Mobile menu -->
<!--
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
-->