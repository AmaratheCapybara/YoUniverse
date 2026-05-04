<script>
import ChatBody from "$lib/components/ChatBody.svelte";
import {MainThemeColors, ScreenColors} from "$lib/stores/styling.svelte.js";
import Messagebar from "$lib/components/miniponents/Messagebar.svelte";
</script>
<div class="card border-[{MainThemeColors.ThirdLively}] border-2 divide-opacity-90" style="background-color: {ScreenColors.BackgroundColor}; color: {ScreenColors.TextColor}">
    <header class="card-header">Add, Name, and settings</header>
<ChatBody></ChatBody>

</div>