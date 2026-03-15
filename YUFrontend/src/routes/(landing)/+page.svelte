<script>


  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  import '../app.css';
  import { 
    Card, 
    Carousel, 
    Tabs, 
    TabItem, 
    Img, 
    Button
  } from 'flowbite-svelte';

  import iOne   from '$lib/images/one.png';
  import iTwo   from '$lib/images/two.png';
  import iThree from '$lib/images/three.png';
  import iFour  from '$lib/images/four.png';
  import iFive  from '$lib/images/five.png';
  import iSix   from '$lib/images/six.png';
  import iSeven from '$lib/images/seven.png';
  import Schedule from '$lib/images/YoUniverse_Solar_Cycles_Project_plan_and_outlook.png';

  const images = [
    { alt: "Fundraiser Summary", src: iOne, title: "Fundraiser Summary"},
    { alt: "tier 1 and 2", src: iTwo, title: "tier 1 and 2"},
    { alt: "tier 3 and 4", src: iThree, title: "tier 3 and 4"},
    { alt: "tier 5 and 6", src: iFour, title: "tier 5 and 6"},
    { alt: "tier 7 and 8", src: iFive, title: "tier 7 and 8"},
    { alt: "tier 9 and 10", src: iSix, title: "tier 9 and 10"},
    { alt: "qr codes", src: iSeven, title: "qr codes"}
  ];
</script>

<iframe width="560" 
height="315" 
src="https://www.youtube.com/embed/5p_SmXHEbuw?si=1WV2gmB2_EREdfli" 
title="YouTube video player" frameborder="0" 
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