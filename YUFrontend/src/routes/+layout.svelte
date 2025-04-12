<script>
	import '../app.css';
	import Footer from './components/Footer.svelte';
	import Navbar from './components/Navbar.svelte'

	let { children } = $props();
</script>
<Navbar/>
{@render children()}
<Footer class="justify-center"></Footer>
