<script>


  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  import '../../app.css';
  import { 
    Card, 
    Carousel, 
    Tabs, 
    TabItem, 
    Img, 
    Button
  } from 'flowbite-svelte';


</script>

<iframe width="560" 
height="315" 
src="https://www.youtube.com/embed/5p_SmXHEbuw?si=1WV2gmB2_EREdfli" 
title="YouTube video player"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen 
class="m-auto justify-center block video"
></iframe>



<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {

  }
</style>