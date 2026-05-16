<script>
	const events = [
		{ date: 'Feb 2026', title: 'Solar Cycles project milestone' },
		{ date: 'Coming soon', title: 'Community schedule updates' }
	];
</script>

<section class="mx-auto max-w-4xl px-4 py-8">
	<div class="card">
		<h1>Schedule</h1>
		<div class="mt-6 grid gap-4 md:grid-cols-2">
			{#each events as event}
				<article class="rounded-lg border border-white/20 bg-white/10 p-4">
					<h2 class="text-2xl">{event.date}</h2>
					<p>{event.title}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
