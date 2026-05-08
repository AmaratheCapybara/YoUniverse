<script>
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import blanklogotransparent from "$lib/images/blanklogotransparent.png";
    import {SendMessage} from "$lib/stores/functions.svelte.js";
    import {Avatar} from 'flowbite-svelte';

    let {
        Sender =
            {
            Name:"Sender",
            FavoriteColor: MainThemeColors.AccentColor,
            ProfilePic: blanklogotransparent
        },
        messageText = undefined,
messageInput ={
            Sender:Sender,
    messageText:messageText
}


    } = $props();


</script>
<span><input type="text" bind:value={messageText} class="grow-7"
             onkeydown={(e) => e.key === 'Enter' && SendMessage(messageInput)}
             placeholder="Message..."/>
<button  type="submit">
    <Avatar src={Sender.ProfilePic} alt={Sender.Name}/> Send
   </button>
</span>
<style>
    input {
        width: 80%;
        min-width: 50%;
    }
 /*img {
        max-width: 40px;
    }*/

</style>