<script>
    import {Search, Button} from "flowbite-svelte";
    import {MainThemeColors} from "$lib/stores/styling.svelte.js";
    import {Searching} from "$lib/stores/functions.svelte.js";
    let {
        SearchInput,
        Placeholder,
        Filter,
        ListArray,
        AvailableTags
    } = $props();
</script>
<form>
    <Search
            value={SearchInput}
            placeholder={Placeholder}
    ></Search>
    <Button color={MainThemeColors.AccentColor} pill outiline="true" shadow="false" onclick={Searching(SearchInput , ListArray)} type="submit">Find</Button>
</form>