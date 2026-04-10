<script>
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";

    let {FavoriteColor, TextColor, PlaneAccentColor=MainThemeColors.ThirdLively} =$props();
</script>

<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect
            width="200"
            height="100"
            x="0"
            y="0"
            rx="10"
            fill={FavoriteColor} />
    <polygon
            fill={TextColor}
            class="plane"
            points="
		110, 10
		190, 50
		110, 90
		140,50

    "/>
    <polygon
            class="planeAccent"
            fill={PlaneAccentColor}
            points="
      110,10
      130,50
      110,90
      110,90
      140,50

    "/>
</svg>