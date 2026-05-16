<script>
import ChatBody from "$lib/components/miniponents/ChatBody.svelte";

import {MainThemeColors, ScreenColors} from "$lib/stores/styling.svelte.js";
import Messagebar from "$lib/components/miniponents/Messagebar.svelte";
import {Chat} from "$lib/stores/Chat.svelte.js";
import HeadmateButtonGroup from "$lib/components/miniponents/HeadmateButtonGroup.svelte";
//import HeadmatePanel from "$lib/components/miniponents/HeadmatePanel.svelte";


</script>
<div  class ="card border-[{MainThemeColors.ThirdLively}]0" style="background-color: {ScreenColors.BackgroundColor}; color: {ScreenColors.TextColor}">
    <header class="card-header">Add, Name, and settings</header><!--todo add button to add, a variable for the name, and a button to open settings-->
<ChatBody Messages={Chat.MessageHistory}></ChatBody>
    <HeadmateButtonGroup></HeadmateButtonGroup>
<Messagebar></Messagebar>

</div>