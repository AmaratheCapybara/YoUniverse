<script>
    import ChatWindow from "$lib/components/blocks/ChatWindow.svelte";
    import {Account} from "$lib/stores/Account.svelte.js";
    import {onMount} from "svelte";
    import {db} from "./DemoData/database.js";
    import {Profile} from "$lib/stores/Profile.svelte.js";
    import {RandoStates} from "$lib/stores/RandomStates.svelte.js";

    let SelectedProfile = $derived.by(Account.SelectedProfile);
    let MessageHistory=$state([]);
    let Profiles = $derived(Account.Profiles);


</script>
<!--todo add conversation selector-->
<ChatWindow Profiles={Profiles}></ChatWindow>