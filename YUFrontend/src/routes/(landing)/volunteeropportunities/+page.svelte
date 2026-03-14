<script>
	import { Search, Button, Badge } from "flowbite-svelte";
	let opportunities = [
		{ name: '', description:'', theneeddos: '', team: '', status: '', howtoapply: ''},
		{
			name:'Fundraiser Coordinator',
			theneeddos: 'plan fundraisers, gather volunteers, manage fundraiser during campaign period, create realistic goals',
			team: 'Project Planning',
		},
		{
			name:'Documentation Writer',
			theneeddos: "Work with devs & leads to create the site's documentation in an easy to read & thorough manner",
			team: 'Writing',
			status: 'Ongoing Onboarding'
		},
		{
			name:'Website Policy Overseer',
			theneeddos: "research what policies the website will be under, research what is needed to be in the policies & privacy documentation on launch",
			team: 'Research',
			status: 'Open'
		},
		{
			name:'Trailer Script Writer',
			theneeddos: 'plan fundraisers, gather volunteers, manage fundraiser during campaign period, create realistic goals',
			team: 'Project Planning',
		},
		{
			name:'Asset Designer',
			theneeddos: 'plan fundraisers, gather volunteers, manage fundraiser during campaign period, create realistic goals',
			team: 'Project Planning',
		},
		{
			name:'Scholarship & Grant Author',
			theneeddos: 'plan fundraisers, gather volunteers, manage fundraiser during campaign period, create realistic goals',
			team: 'Project Planning',
		}
	];
</script>
<Search>
	<Button class="me-1" color="--color-accent" >Search</Button>
</Search>
{#snippet Opportunity(name, theneeddos, team, status, howtoapply)}
<header><h2>{name}</h2> <h4>{status}</h4>
</header>
	<Badge>{team}</Badge>
	<p>{theneeddos}</p>
	{/snippet}
{#each opportunities as opportunity}
	<div class="card m-4">
	{@render Opportunity(opportunity.name, opportunity.theneeddos, opportunity.team, opportunity.status, opportunity.howtoapply)}
	</div>
	{/each}