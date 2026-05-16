<script>
	let { colnum = 1, rownum = 1 } = $props();
</script>

<div
	class="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-gray-400/80 bg-white/10 text-3xl text-white"
	style={`grid-column: span ${colnum}; grid-row: span ${rownum};`}
	aria-label="Empty profile panel"
>
	+
</div>
