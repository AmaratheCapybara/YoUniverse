<script>
import { Img } from 'flowbite-svelte';
</script>

<article>
	<section>
		<h1>Volunteer</h1>
		<p>We are accepting volunteers through email and our <a href='https://discord.gg/NmmkZP6QFS'>discord server</a>!</p>
	</section>

	<!-- hidden section
	<section>
		<h1 class="hidden">Stay up to date</h1>
			Discord
			maybe email letter
	</section>
	-->

	<section>
		<h1>Funding</h1>

		<h2>Donation pages</h2>
		<!-- for single time donations and custom monthly donations, use Ko-fi. For preset memberships use patreon. -->
		<div class= "flex-wrap-reverse">
			<a class="button" href="https://ko-fi.com/amaracapybara">Ko-fi</a>
			<a class="button" href ='patreon.com/YoUniverseProject'> Patreon</a>
		</div>
		<h2>Fundraiser</h2>
		<p>During the month of <b>August</b>, donors will receive rewards and prizes (see the tiers below).

			Prizes include exclusive assets for your YoUniverse account and art pieces made by plural artists. Rewards will be processed and shipped out after the fundraiser is finished.</p>
		<div class="w-full ">
			<!--{#each images as image}
				<Img src={image.src} alt={image.alt} class="rounded-lg flex-wrap-reverse center mx-auto max-w-9/10"/>

			{/each}-->
		</div>
		<h2>Merchandise</h2>

		<!--Redbubble Shop-->
		<p class="pb-5"><i>Returns and refunds are done through RedBubble. YoUniverse is not responsible for the creation and delivery of merchandise. If an issue occurs, contact Redbubble's customer service.</i></p>
		<a class="button" href="https://www.redbubble.com/people/TheYoUniverse/shop?asc=u">RedBubble Shop</a>
		<h2>Financial Transparency</h2>
		<h3>Percentage YoUniverse recieves from:</h3>
		<ul>
			<li><b>ko-fi:</b>100% goes to YoUniverse</li>
			<li><b>Stripe</b> <i>(used to recieve some ko-fi payments and donations)</i><b>:</b> 2.9% + 30¢
				fee per successful transaction for domestic cards</li>
			<li class="hidden"><b>Patreon:</b></li> <!-- TODO: fill this in eventually -->
			<li><b>RedBubble:</b> 20% goes to YoUniverse (80% fee for product and shipping)</li>
		</ul>
	</section>
</article>