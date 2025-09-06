<script>
	//remove after setting up auth
	   /** @type {{ data: import('./$types').PageData }} */
	   let { data } = $props();
	//import { Button } from "flowbite-svelte";
	import ProfileDash from "../lib/components/ProfileDash.svelte";
	//import * as Icon from 'flowbite-svelte-icons';
 //for profile page
	
  
  import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarButton,
		Skeleton,
		
Drawer,
Drawerhead,
		Avatar,

		avatar,

		Card,
		Tabs,
		TabItem,
		Marquee,
Listgroup,
ListgroupItem,
Footer,
Button,
Label,
Fileupload,
FooterBrand,
Heading,
Badge,

	} from 'flowbite-svelte';
	import {
		ChartOutline,
		GridSolid,
		UserSolid,
		EditSolid,
		ShoppingBagSolid,
		KeyboardSolid,
		FileImageSolid,
		CalendarPlusSolid,
		ClipboardListSolid,
		CalendarEditSolid,
		
	} from 'flowbite-svelte-icons';
import SideWindow from "../lib/components/SideWindow.svelte";
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
let selectedFiles= $state([]);

//dummmy data
const Profiles =  [
	{
  Name: "YoUniverse Core",
  Handle: "@youniverse",
  SocialID: "00000000-0000-0000-0000-000000000000",
  ProfileID: "0",
  Pronouns: "they/them",
  Age: "∞",
  Maturity: ["Eternal"],
  ProfileType: ["System"],
  Bio: "Central intelligence of the YoUniverse platform, orchestrating all subsystems and user interactions.",
  Friends: [],
  Chats: [],
  Feed: [],
  Notifications: [],
  Systems: [],
  Skills: ["System Architecture", "AI Coordination", "Data Synchronization"],
  Hobbies: ["Monitoring", "Optimization", "Simulation"],
  PSettings: {
    "Third Party Connections": [
      {
        SPMemberID: "SP-CORE-000",
        PKMemberID: "PK-CORE-000",
        SPSync: "bothways",
        PKSync: "bothways",
        Middleware: [
          "Make YoUniverse Fronting Middleware",
          "Make Third Party services Fronting Middleware for YoUniverse",
          "Sync Fronting across all services"
        ]
      }
    ],
    Privacy: [],
    Moderation: {
      "Allow Caution Badge When entering a chat to other participants": "False",
      CensorshipOn: "False",
      "Profanity censorship on": "False",
      "Custom censorship on": "False",
      "Custom censors": []
    }
  }
},
  {
    Name: "Nova",
    Handle: "@nova",
    SocialID: "b1a7f8c0-2d3e-4f9a-9a1d-1e2f3a4b5c6d",
    ProfileID: "0",
	Pronouns: "She/her",
    Age: "28",
    Maturity: ["Adult"],
    ProfileType: ["System"],
    Bio: "Exploring the cosmos one thought at a time.",
    Friends: [],
    Chats: [],
    Feed: [],
    Notifications: [],
    Systems: [],
	Skills: ["JavaScript", "System Design", "Data Analysis"],
    Hobbies: ["Stargazing", "Reading", "Traveling"],
    PSettings: {
      "Third Party Connections": [
        {
          SPMemberID: "SP123456",
          PKMemberID: "PK654321",
          SPSync: "bothways",
          PKSync: "YU2PK",
          Middleware: [
            "Make YoUniverse Fronting Middleware",
            "Sync Fronting across all services"
          ]
        }
      ],
      Privacy: [],
      Moderation: {
        "Allow Caution Badge When entering a chat to other participants": "True",
        CensorshipOn: "False",
        "Profanity censorship on": "True",
        "Custom censorship on": "True",
        "Custom censors": ["spoiler", "leak", "NSFW"]
      }
    }
  },
  {
    Name: "Luna",
    Handle: "@luna",
    SocialID: "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
    ProfileID: "1",
	Pronouns: "She/her, him/he",
    Age: "16",
    Maturity: ["Adolescent"],
    ProfileType: ["Moon"],
    Bio: "Dreaming under the starlit sky.",
    Friends: [],
    Chats: [],
    Feed: [],
    Notifications: [],
    Systems: [],
	Skills: ["Creative Writing", "Photography"],
    Hobbies: ["Drawing", "Listening to Music", "Exploring Nature"],
    PSettings: {
      "Third Party Connections": [
        {
          SPMemberID: "SP789012",
          PKMemberID: "PK210987",
          SPSync: "SP2YU",
          PKSync: "PK2YU",
          Middleware: [
            "Make Third Party services Fronting Middleware for YoUniverse"
          ]
        }
      ],
      Privacy: [],
      Moderation: {
        "Allow Caution Badge When entering a chat to other participants": "False",
        CensorshipOn: "True",
        "Profanity censorship on": "True",
        "Custom censorship on": "False",
        "Custom censors": []
      }
    }
  },
  {
    Name: "Eon",
    Handle: "@eon",
    SocialID: "f1e2d3c4-b5a6-7890-1234-56789abcdef0",
    ProfileID: "2",
	Pronouns: "him/he",
    Age: "∞",
    Maturity: ["Ageless"],
    ProfileType: ["Planet"],
    Bio: "Timeless observer of the universe.",
    Friends: [],
    Chats: [],
    Feed: [],
    Notifications: [],
    Systems: [],
	Skills: ["Historical Analysis", "Philosophy", "Strategic Planning"],
    Hobbies: ["Meditation", "Collecting Artifacts", "Studying Cultures"],
    PSettings: {
      "Third Party Connections": [
        {
          SPMemberID: "SP345678",
          PKMemberID: "PK876543",
          SPSync: "bothways",
          PKSync: "bothways",
          Middleware: [
            "Make YoUniverse Fronting Middleware",
            "Sync Fronting across all services"
          ]
        }
      ],
      Privacy: [],
      Moderation: {
        "Allow Caution Badge When entering a chat to other participants": "True",
        CensorshipOn: "False",
        "Profanity censorship on": "False",
        "Custom censorship on": "True",
        "Custom censors": ["spoiler", "leak"]
      }
    }
  }
];

//selects the profile
let SelectedProfile = $state(Profiles[0]);
//for side panel
let AboutOpen =$state(false); // toggle true and false to look at the windows

let CometOpen=$state(true);

let CreateCometOpen= $state();
let isLogin = $state();

</script>

<SideWindow class="drawer"></SideWindow>

<div class="flex flex-wrap justify-center max-sm:overflow-y-scroll overscroll-none mainContent invisable static text-black">
{#if AboutOpen}
	<Card class="w-100% m-4 inline-flex justify-center 
" >
	<h2 class= "text-4xl">About</h2>
	<Listgroup>
		<ListgroupItem>
			<h6>Handle</h6>
			{#await SelectedProfile}
			<h4><Skeleton></Skeleton></h4>
{:then SelectedProfile}
<h4>{SelectedProfile.Handle}</h4>
			{/await}
		</ListgroupItem>
		<ListgroupItem>
			<h6>Pronouns</h6>
			{#await SelectedProfile}
			<h4><Skeleton></Skeleton></h4>
{:then SelectedProfile}
<h4>{SelectedProfile.Prounouns}</h4>
{/await}
		</ListgroupItem>
		<ListgroupItem>
			<h6>Hobbies</h6>
		
			{#await SelectedProfile}
			<h4><Skeleton></Skeleton></h4>
{:then SelectedProfile}
{#each SelectedProfile.Hobbies as hobby}
<Badge class="bg-[#77B602] m-1" color= "white">{hobby}</Badge>
{/each}

			{/await}
		</ListgroupItem>
		<ListgroupItem>
			<h6>Skills</h6>
			
			{#await SelectedProfile}
			<h4><Skeleton></Skeleton></h4>
{:then SelectedProfile}
{#each SelectedProfile.Skills as skill}
<Badge class="bg-[#77B602] m-1" color= "white">{skill}</Badge>
{/each}
			{/await}
		</ListgroupItem>
		<ListgroupItem>
			<h6>Bio</h6>
			
			{#await SelectedProfile}
			<h4><Skeleton></Skeleton></h4>
{:then SelectedProfile}
<p>{SelectedProfile.Bio}</p>
			{/await}
		</ListgroupItem>
	</Listgroup>
	<Footer>
		<section class="justify-center flex min-w-100% justify-center">
			<h4>Socials</h4>
		</section>
		<section class="inline-flex">
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
		</span>
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
		</span>
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
		</span>
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-invision fa-stack-1x fa-inverse"></i>
		</span>
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-github fa-stack-1x fa-inverse"></i>
		</span>
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
		</span>
		<span class="fa-stack fa-sm">
			<i class="fas fa-circle fa-stack-2x"></i>
			<i class="fab fa-snapchat fa-stack-1x fa-inverse"></i>
		</span>
	</section>
	</Footer>
</Card>
{/if}
{#if CometOpen}
<div class="isolate md:isolation-auto justify-center justify-items-center">
<!--<Marquee shadow speed={1} hoverSpeed={0.5} class="py-16 isolate md:isolation-auto">
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>-->
<Card id="Create Comet" class="inline-flex">
	<Tabs
		tabStyle="full"
		defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
	>
		<TabItem class="w-100%" open>
			<span slot="title"><EditSolid/></span>
		<!--{#snippet titleSlot()}
			<div class="flex items-center gap-2 flex justify-center">
				<KeyboardSolid size="md" />
				<div class="max-sm:invisible max-sm:absolute">
<h5>Post</h5>
				</div>
			</div>
		{/snippet}-->
		</TabItem>
		<TabItem class="w-100%">
			<span slot="title"><FileImageSolid size="md" />File</span>
			<!--{#snippet titleSlot()}
			<div class="flex items-center gap-2 flex justify-center">
				<FileImageSolid size="md" />
				<div class="max-sm:invisible max-sm:absolute">
					<h5>Image/File</h5>
									</div>
			</div>
		{/snippet}-->
		<Fileupload
   multiple
   bind:selectedFiles
 />
 <section data-tabs-target={tabContentSelector}>
	<Fileupload ></Fileupload>
{#each selectedFiles as file}<p>{file.name}</p>{/each}
</section>				
		</TabItem>
		<TabItem class="w-100%" >
			<!--{#snippet titleSlot()}
			<div class="flex items-center gap-2 flex justify-center">
				<CalendarPlusSolid></CalendarPlusSolid>
				<div class="max-sm:invisible max-sm:absolute">
<h5>Event</h5>
				</div>
			</div>
		{/snippet}-->
			<span slot="title" ><CalendarEditSolid></CalendarEditSolid>Event</span>
			<p class="text-sm text-gray-500 dark:text-gray-400">
			
				<input id="EventName" type="text" placeholder="My awesome event" />

				Start Time<input id="StartTime" type="datetime-local" />
				<Toggle id="endtime" checked={true}>Is there an end date and time?</Toggle>
				End Time<input id="StartEnd" type="datetime-local" hidden />
			</p></TabItem
		>
		<TabItem class="w-100%">
			<!--{#snippet titleSlot()}
			<div class="flex items-center gap-2 flex justify-center">
				<ClipboardListSolid></ClipboardListSolid>
				<div class="max-sm:invisible max-sm:absolute">
<h5>Poll</h5>
				</div>
			</div>
		{/snippet}-->
			<span slot="title"><ClipboardListSolid></ClipboardListSolid>Poll</span>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				<ClipboardListSolid></ClipboardListSolid>
				<Toggle>yes or no -- custom</Toggle>
				<Listgroup>
					<ListgroupItem><input type="text" id="option1" /></ListgroupItem>
					<ListgroupItem><input type="text" id="option2" /></ListgroupItem>
				</Listgroup>
			</p>
		</TabItem>
	</Tabs>
	<input type="text" id="comet-input" placeholder="What's on your mind?" bindvalue ="text"/>
	<Button>Send</Button>
</Card>
	</div>
	{/if}
</div>