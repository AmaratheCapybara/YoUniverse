<script>
    import ChatWindow from "$lib/components/blocks/ChatWindow.svelte";
    import {Account} from "$lib/stores/Account.svelte.js";

    let SelectedProfile = $derived(Account.SelectedProfile);
</script>
<!--todo add conversation selector-->
<ChatWindow></ChatWindow>