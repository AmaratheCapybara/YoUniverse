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
<span><input type="text" bind:value={messageInput} class="grow-7"/>
<button onclick={SendMessage(Sender, messageInput)} >
    <img src={Sender.ProfilePic} alt={Sender}/> Send
   </button>
</span>
<style>
    input {
        width: 80%;
        min-width: 50%;
    }
    img {
        max-width: 40px;
    }
</style>