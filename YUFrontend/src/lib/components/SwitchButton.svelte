<script>
    import { sineIn } from 'svelte/easing';
	import {
		Button,
		Dropdown,
		DropdownUl,
		DropdownLi,
		DropdownHeader,
		DropdownFooter,
		Search,
		Checkbox,
		MegaMenu
	} from 'flowbite-svelte';
	import { ChevronDownOutline, UserRemoveSolid } from 'flowbite-svelte-icons';
import {uiHelpers} from "svelte-5-ui-lib";
let {ProfilePic, Name}= $props();
	let searchTerm = $state('');
	const Profiles = [
		{ name: 'Robert Gouth', checked: false },
		{ name: 'Jese Leos', checked: false },
		{ name: 'Bonnie Green', checked: true }
	];
	let filteredItems = $derived(
		people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1)
	);

	let dropdownSearch = uiHelpers();
	let dropdownSearchStatus = $state(false);
	let closeDropdownSearch = dropdownSearch.close;
	$effect(() => {
		dropdownSearchStatus = dropdownSearch.isOpen;
	});
</script>
<MegaMenu></MegaMenu>
<!--
<div class="flex h-60 items-start justify-center">
	<Button onclick={dropdownSearch.toggle} color='#77B602'>
		<h1>Switch</h1>
		<ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
	</Button>
	{#if (Account.AccounType === "Polyfragmented")}
	<div class="relative">
		<Dropdown
			dropdownStatus={dropdownSearchStatus}
			closeDropdown={closeDropdownSearch}
			params={{ y: 0, duration: 200, easing: sineIn }}
			class="absolute top-[40px] -left-[175px] w-52"
		>
			<DropdownHeader>
				<Search size="md" bind:value={searchTerm} />
			</DropdownHeader>
			<DropdownUl class="h-24 overflow-y-auto p-2">
				{#each filteredItems as person (person.name)}
					<DropdownLi liClass="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
						<Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
					</DropdownLi>
				{/each}
			</DropdownUl>
			<DropdownFooter
				class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
			>
				<UserRemoveSolid class="text-primary-700 dark:text-primary-700 me-2 h-4 w-4" />Delete user
			</DropdownFooter>
		</Dropdown>
	</div>
   
	{/if}
</div>
-->