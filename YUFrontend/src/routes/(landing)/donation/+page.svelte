<script>
    import '../../../app.css';
    import { Card, Button} from 'flowbite-svelte';

    import PatreonSymbol from '$lib/images/fhd_Patreon_Symbol_6fff9723d3.png'
    import PatreonWordmark from '$lib/images/fhd_Patreon_Wordmark_fb38c295a1.png'
		import DonateWindow from '$lib/components/paymentgateway/DonateWindow.svelte';
	//import { Button } from 'svelte-5-ui-lib';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>
<!--<DonateWindow></DonateWindow>-->
<div class="card">
	<h1 class='max-w-full'>Custom amount donated monthly</h1><h3 class="mx-auto">or...</h3>
	<iframe id='kofiframe' src='https://ko-fi.com/youniverseproject/?hidefeed=true&widget=true&embed=true&preview=true' style='border:none;width:100%;padding:4px;background:#f9f9f9;' height='712' title='youniverseproject'></iframe>

</div>
<div class="card">
	<section><h1>become a member on our patreon</h1></section>

	<a class="button flex mx-auto" href='patreon.com/YoUniverseProject'>
		<img src={PatreonSymbol} alt='Patreon' class="w-5/10 max-w-3xs h-auto"/>
		<img src={PatreonWordmark} alt="patreon" class="w-5/10 max-w-3xs h-auto"/>
		<span class="hidden">Go to Patreon</span>
	</a>
</div>

<style lang="postcss">
	@reference "tailwindcss";

</style>