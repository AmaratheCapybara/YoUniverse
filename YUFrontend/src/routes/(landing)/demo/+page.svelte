<script>
    import ChatWindow from "$lib/components/blocks/ChatWindow.svelte";
    import {Account} from "$lib/stores/Account.svelte.js";

    let Profiles = $derived(Account.Profiles);
</script>
<!--todo add conversation selector-->
<ChatWindow Profiles={Profiles}></ChatWindow>
