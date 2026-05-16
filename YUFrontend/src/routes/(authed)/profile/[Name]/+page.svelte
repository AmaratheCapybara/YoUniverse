<script>
	import PlusPlaceholder from '../../../utils/PlusPlaceholder.svelte';

	let { data } = $props();

	let name = $derived(data?.Name ?? 'Profile');
</script>

<section class="mx-auto max-w-5xl px-4 py-8">
	<div class="mb-6 rounded-lg bg-[#050C1D]/90 p-6 text-white">
		<h1 class="text-4xl">{name}</h1>
		<p class="text-center">Profile dashboard preview</p>
	</div>

	<div class="grid gap-4 rounded-lg border-2 border-dashed border-gray-200 p-4 md:grid-cols-3">
		<PlusPlaceholder colnum={3} rownum={1} />
		<PlusPlaceholder />
		<PlusPlaceholder colnum={2} rownum={2} />
		<PlusPlaceholder />
		<PlusPlaceholder colnum={2} rownum={2} />
	</div>
</section>
