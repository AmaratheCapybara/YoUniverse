<script>
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import blanklogotransparent from "$lib/images/blanklogotransparent.png";
    import {SendMessage} from "$lib/stores/functions.svelte.js";
    import {Avatar} from 'flowbite-svelte';
import {RandoStates} from "$lib/stores/RandomStates.svelte.js";
    let {
        Sender = RandoStates.Sender,
        messageText = undefined,
messageInput ={
            Sender:Sender,
    messageText:messageText
}


    } = $props();


</script>
<form>
<span><input type="text" bind:value={messageText} class="grow-7"
             onkeydown={(e) => e.key === 'Enter' && SendMessage(messageInput) }
             placeholder="Message..."/>
<button  type="submit" disable = {!Sender}>
    <Avatar src={Sender.ProfilePic} alt={Sender.Name}/> Send
   </button>
</span>
</form>
<style>
    input {
        width: 80%;
        min-width: 50%;
    }
 /*img {
        max-width: 40px;
    }*/

</style>