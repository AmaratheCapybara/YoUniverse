<script>
	import { Card } from 'flowbite-svelte';
	import { Button } from 'svelte-5-ui-lib';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>
<iframe id='kofiframe' src='https://ko-fi.com/youniverseproject/?hidefeed=true&widget=true&embed=true&preview=true' style='border:none;width:100%;padding:4px;background:#f9f9f9;' height='712' title='youniverseproject'></iframe>
<Card>
    <section><h2>Or become a member on our patreon</h2></section>
    <Button href =''>
        <image src= '$images/fhd_Patreon_Symbol_6fff9723d3.png'/>
        <image src= '$images/fhd_Patreon_Wordmark_fb38c295a1.png'/>
    </Button>
</Card>