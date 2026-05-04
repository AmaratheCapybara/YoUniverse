<script>
    let {Messages= undefined, Participants=["Billy", "Gilly", "Silly"]
    } = $props();
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    let Calm = $derived(MainThemeColors.ThirdCalm);
</script>
{#snippet Message (messageInput, Timestamp, SenderName, SenderFavoriteColor)}
<div>
    <div style="background-color: {SenderFavoriteColor}">
        <header>{SenderName}</header>
        <section>{messageInput}</section>
    </div>
    <p>{Timestamp}</p>
</div>
    {/snippet}
<div id="ChatBody">
    {#if Messages===undefined}
        {@render Message("talk","now", "Me",MainThemeColors.ThirdCalm)}
        {@render Message("to","then", "myself",MainThemeColors.ThirdLively)}
        {@render Message("Someone","later", "I",MainThemeColors.AccentColor)}
        {/if}
</div>