<script>


	let Rewards =[
		{ name: 'Handmade Reusable Face Scrubby',
			image:"",
			descriptions:"",
			material: "",
			dimensions: "",
			price:"5",

		},
		{ name: 'Handmade Reusable Loofah',
			image:"",
			descriptions:"",
			material: "",
			dimensions: "",
			price:"10",

		},
	]
</script>
{#snippet RewardTemplate (name, image, descriptions, material, dimensions, price)}
	<div>
		<header>{name}</header>
		<div></div>
		<h2>{price}</h2>
	</div>
	<div></div>
	{/snippet}
<article>
	<h1>True love is self care</h1>
	<p> Any donation above $5 dollars will come with a reward that helps with hygiene</p>
</article>