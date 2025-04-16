<script>
    import {ButtonGroup, Button, GradientButton, Footer} from 'svelte-5-ui-lib';
    import '../../app.css';
</script>
<Footer footerType="sticky" class="absolute flex justify-stretch justify-center bg-transparent">

    <ButtonGroup id="FooterButtons" class=" flex justify-stretch justify-center bg-[#77B602] center">
        <Button href="https://ko-fi.com/youniverseproject" class="basicBitchButton">Donation</Button>
        <Button href="https://www.redbubble.com/people/TheYoUniverse/shop?asc=u"  class="bg-[#77B602]">Merch</Button>
        <Button href="../about"  class="bg-[#77B602]">About</Button>
    </ButtonGroup>
</Footer>