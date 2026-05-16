<script>
    import {ButtonGroup, Button, GradientButton, Footer} from 'flowbite-svelte';
    import '../../app.css';
    import {ScreenColors} from "$lib/stores/styling.svelte.js";
</script>
<Footer footerType="sticky" class="footer color: {ScreenColors.TextColor} backgroundColor={ScreenColors.AccentColor} " >

    <ButtonGroup id="FooterButtons" class="">
        <Button href="../donation" class="">Donation</Button>
        <Button href="../getinvolved"  class="">Get Involved</Button>
        <Button href="../about"  class="">About</Button>
    </ButtonGroup>
</Footer>