<script>
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import {ScreenColors} from "$lib/stores/styling.svelte.js";

    let {Name, Timestamp, FavoriteColor=MainThemeColors.AccentColor, messageInput} =$props();
    import {FindTextColor} from "$lib/stores/functions.svelte.js";
    let TextColor= $derived(FindTextColor(FavoriteColor));
</script>
<div class="border-[{MainThemeColors.ThirdCalm}] border-2 divide-opacity-90" style="color:{ScreenColors.TextColor}">
    <div class="card shrink flex-wrap" style="background-color: {FavoriteColor}; Color:{TextColor}">
        <header><h4>{Name}</h4></header>
        <section><p>{messageInput}</p></section>
    </div>

    <p>{Timestamp}</p>
</div>
