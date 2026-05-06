<script>
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import {ScreenColors} from "$lib/stores/styling.svelte.js";

    let {Name, Timestamp, FavoriteColor=MainThemeColors.AccentColor, messageInput} =$props();
    import {FindTextColor} from "$lib/stores/functions.svelte.js";
    let TextColor= $derived(FindTextColor(FavoriteColor));
</script>
<div  style="color:{ScreenColors.TextColor}">
    <div class="card shrink flex-wrap" id="Messagebubble" style="background-color: {FavoriteColor}; Color:{TextColor}">
        <header><h4>{Name}</h4></header>
        <section><p>{messageInput}</p></section>
    </div>

    <p>{Timestamp}</p>
</div>
<style>
    #Messagebubble {
        min-width: 30%;
        width: 50%;
        max-width: 60%;

    }
</style>
