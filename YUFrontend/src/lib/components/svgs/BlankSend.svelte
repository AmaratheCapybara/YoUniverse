<script>
    import mainThemeColors from "$lib/styles/mainThemeColors";
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    let {
        FavoriteColor = MainThemeColors.AccentColor,
        TextColor= MainThemeColors.ThirdCalm,
        PlaneAccentColor = MainThemeColors.ThirdLively
    } = $props();
    let r= $state();
    let g = $state();
    let b = $state();
    $effect(() => {
        async function FindTextColor(FavoriteColor,TextColor) {

            const splitted = FavoriteColor.split("");
            // 3 digits
            if (FavoriteColor.length === 3) {
                let r = parseInt("0x" + splitted[0] + splitted[0]);
                g = parseInt("0x" + splitted[1] + splitted[1]);
                b = parseInt("0x" + splitted[2] + splitted[2]);

                // 6 digits
            } else if (FavoriteColor.length == 6) {
                r = parseInt("0x" + splitted[0] + splitted[1], 16);
                g = parseInt("0x" + splitted[2] + splitted[3], 16);
                b = parseInt("0x" + splitted[4] + splitted[5], 16);
            };

            $inspect(FavoriteColor, r, g, b);
            if (((r * 0.299) + (g * 0.587) + (b * 0.144)) > 186) {
                return TextColor="#000000"
            } else {
                return TextColor="#ffffff"
            }
        }

    });
    $inspect(FavoriteColor, r, g, b);
</script>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect
            width="100"
            height="100"
            x="50"
            y="50"
            rx="10"
            fill={FavoriteColor} />
    <polygon
            fill={TextColor}
            class="plane"
            points="
      60,60
      140,100
      60,140
      90,100
      60,60

    "/>
    <polygon
            class="planeAccent"
            fill={PlaneAccentColor}
            points="
      60,60
      100,100
      60,140
      90,100
      60,60

    "/>
</svg>