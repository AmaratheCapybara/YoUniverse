<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/blocks/Navbar.svelte';

	//import BottomButtons from '$lib/components/BottomButtons.svelte';
	let { data, children } = $props();

</script>

<Navbar user={data.user}></Navbar>
<div class="my-20 lg:my-30">
{@render children()}
</div>

<Footer></Footer>



