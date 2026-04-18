<script>
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import blanklogotransparent from "$lib/images/blanklogotransparent.png";
    import {SendMessage} from "$lib/stores/functions.svelte.js";

    let {
        Sender = {
            Name:"Sender",
            FavoriteColor: MainThemeColors.AccentColor,
            ProfilePic: blanklogotransparent
        },
        messageInput
    } = $props();
</script>
<span><input type="text" bind:value={messageInput}/>
<button onclick={SendMessage(Sender, messageInput)} disabled={!senderInput} style="background-color: {Sender.FavoriteColor}">
    <img src={Sender.ProfilePic} alt={sender} > Send
   </button>
</span>