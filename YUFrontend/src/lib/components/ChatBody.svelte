<script>
    let {Messages= undefined, Participants=["Billy", "Gilly", "Silly"]
    } = $props();
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import Message from "$lib/components/repeaters/Message.svelte";


</script>
{#snippet message (messageInput, Timestamp, SenderName, SenderFavoriteColor)}
<Message Name={SenderName} messageInput={messageInput} FavoriteColor={SenderFavoriteColor} Timestamp={Timestamp}></Message>
    {/snippet}
<div id="ChatBody" class="border-[{MainThemeColors.ThirdCalm}] border-2 divide-opacity-90">
    {#if Messages===undefined}
        {@render message("talk","now", "Me", MainThemeColors.ThirdCalm)}
        {@render message("to","then", "myself", MainThemeColors.ThirdLively)}
        {@render message("Someone","later", "I", MainThemeColors.AccentColor)}
        {/if}
</div>