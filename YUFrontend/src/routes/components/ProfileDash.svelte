<script>
    import { sineIn } from 'svelte/easing';
	import {
		Dropdown,
		DropdownUl,
		DropdownLi,
		DropdownHeader,
		DropdownFooter,
		Avatar,
		uiHelpers
	} from 'svelte-5-ui-lib';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
    
    let dropdownUser = uiHelpers();
	let dropdownUserStatus = $state(false);
	let closeDropdownUser = dropdownUser.close;
	$effect(() => {
		dropdownUserStatus = dropdownUser.isOpen;
		activeUrl = $page.url.pathname;
	});
</script>
{#snippet navSlotBlock()}
<div class="flex items-center space-x-1 md:order-2">
    <Avatar
        onclick={dropdownUser.toggle}
       
        dot={{ color: 'green' }}
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
    <NavHamburger {toggleNav} />
</div>
{/snippet}