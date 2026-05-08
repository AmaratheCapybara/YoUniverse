<script>
import ChatBody from "$lib/components/miniponents/ChatBody.svelte";

import {MainThemeColors, ScreenColors} from "$lib/stores/styling.svelte.js";
import Messagebar from "$lib/components/miniponents/Messagebar.svelte";
import {Chat} from "$lib/stores/Chat.svelte.js";
</script>
<div  class ="card border-[{MainThemeColors.ThirdLively}]0" style="background-color: {ScreenColors.BackgroundColor}; color: {ScreenColors.TextColor}">
    <header class="card-header">Add, Name, and settings</header>
<ChatBody Messages="{Chat.MessageHistory}"></ChatBody>
<Messagebar></Messagebar>
</div>