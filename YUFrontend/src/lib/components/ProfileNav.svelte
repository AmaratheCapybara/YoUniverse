<script>
	import { Avatar, Sidebar, SidebarGroup, SidebarItem, SidebarButton, Listgroup, ListgroupItem } from 'flowbite-svelte';
	import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
    let {AboutOpen=$bindable(true),...props} =$props()
	let activeUrl = $state($page.url.pathname);
	//import PlusPlaceholder from '../../../utils/PlusPlaceholder.svelte';
	const spanClass = 'flex-1 ms-3 whitespace-nowrap';



    //functions
	export async function AboutToggle() {
        () => (AboutOpen = !isAboutOpen)
    };
    export async function StarGazingToggle(StarGazingOpen) {
        () => (isOpen = !isOpen)
    };
    export async function FriendsToggle(FriendsOpen) {
        () => (isOpen = !isOpen)
    };
    export async function SystemsToggle(SystemsOpen) {
        () => (isOpen = !isOpen)
    };
    export async function GroupsToggle(GroupsOpen) {
        () => (isOpen = !isOpen)
    };
let navCategories=[
    {category:"About me!", function: AboutToggle, tooltip:""},
    {category:"Star Gazing!",function: StarGazingToggle, tooltip:""},
    {category:"Friends",function: FriendsToggle, tooltip:""},
    {category:"Systems",function: SystemsToggle, tooltip:""},
    {category:"Groups",function: GroupsToggle, tooltip:""}
];
	$effect(() => {
		
		activeUrl = $page.url.pathname;
	});
</script>
<section class="items-center text-xl font-semibold text-black dark:text-color-text">
<Avatar size=xl></Avatar>
<h1>Name</h1>
<h2><b>@</b>somehandle</h2>
<h2>Pronouns</h2>
</section>
<sectiion class="text-black items-center text-black dark:text-color-text">
    <Listgroup>
        {#each navCategories}
        <ListgroupItem onclick={navCategories.function}>
            <h4>
                {navCategories.category}
            </h4>
            
        </ListgroupItem>
        {/each}
    </Listgroup>
</sectiion>