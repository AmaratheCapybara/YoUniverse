<script>
    import {
        Button,
        Dropdown,
        DropdownItem,
    } from 'flowbite-svelte';
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
</script>
<Button id="info" class="button" color={MainThemeColors.AccentColor}>Info</Button>

<Dropdown triggeredBy ="#info">
    <DropdownItem class="button" href="/" color={MainThemeColors.AccentColor}>Homepage</DropdownItem> <!--We need to make this specifically the landing page-->
    <DropdownItem class="button" href="./about" color={MainThemeColors.AccentColor}>About</DropdownItem>
    <DropdownItem class="button" href="./goals" color={MainThemeColors.AccentColor}>Goals</DropdownItem>
    <DropdownItem class="button" href="./announcements" color={MainThemeColors.AccentColor}>Announcements</DropdownItem>
    <DropdownItem class="button" href ="./volunteeropportunities" color={MainThemeColors.AccentColor}>Help Out!</DropdownItem>
    <DropdownItem class="button" href= "./donation" color={MainThemeColors.AccentColor}>Donation</DropdownItem>
    <DropdownItem class="button" href="./contact" color={MainThemeColors.AccentColor}>Contact</DropdownItem>
</Dropdown>
