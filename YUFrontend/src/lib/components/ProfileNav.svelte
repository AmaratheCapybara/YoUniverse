<script>
	import { Avatar, Sidebar, SidebarGroup, SidebarItem, SidebarButton, Listgroup, ListgroupItem } from 'flowbite-svelte';
	import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
    let {
        AboutOpen=$bindable(true),
        StargazingOpen =$bindable(false),
        FreeOpen=$bindable(false),
        SystemOpen=$bindable(false),
        GroupsOpen=$bindable(false),

        ...props

    } =$props()
	let activeUrl = $state($page.url.pathname);
	//import PlusPlaceholder from '../../../utils/PlusPlaceholder.svelte';
	const spanClass = 'flex-1 ms-3 whitespace-nowrap';



    //functions
	export async function AboutToggle() {
        () => (AboutOpen = !AboutOpen)
    };
    export async function StarGazingToggle(StarGazingOpen) {
        () => (StargazingOpen = !StargazingOpen)
    };
    export async function FriendsToggle(FriendsOpen) {
        () => (FreeOpen = !FreeOpen)
    };
    export async function SystemsToggle(SystemsOpen) {
        () => (SystemOpen = !SystemOpen)
    };
    export async function GroupsToggle(GroupsOpen) {
        () => (GroupsOpen = !GroupsOpen)
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
        {#each navCategories as navCategories}
        <ListgroupItem onclick={navCategories.function}>
            <h4>
                {navCategories.category}
            </h4>
            
        </ListgroupItem>
        {/each}
    </Listgroup>
</sectiion>