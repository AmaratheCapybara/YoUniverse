<script>
	import '../app.css';
import Footer from '../lib/components/Footer.svelte';
import Navbar from '$lib/components/Navbar.svelte';
	import BottomButtons from '$lib/components/BottomButtons.svelte';
	let { children } = $props();
</script>
<Navbar></Navbar>
<div class="my-20 lg:my-30">
{@render children()}
</div>

<Footer></Footer>




