<script>
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Navbar from '../lib/components/Navbar.svelte'

	let { children } = $props();
</script>
<Navbar/>
{@render children()}
<Footer class="justify-center"></Footer>
<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
	  background-color: #050C1D;
	  background-image: url("$lib/images/starbackground.jpg");
	  background-repeat: repeat;
	  background-size: cover;
	}
  </style>