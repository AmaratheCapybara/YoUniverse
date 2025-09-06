<script>
	import { Drawer, Drawerhead, Button,  Avatar } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import ProfileNav from './ProfileNav.svelte';
	
	let drawerStatus = $state(true);
	let drawer= $state();
	const closeDrawer = drawer.close;
	$effect(() => {
		drawerStatus = drawer.isOpen;
	});
</script>

<Button onclick={drawer.toggle}>Drawer</Button>
<Drawer drawerStatus={drawerStatus} closeDrawer={closeDrawer}
   backdrop={false}
   class="light:bg-white top-16 h-screen start-0"
>
  <Drawerhead onclick={closeDrawer} class="mb-4">
    <h5 id="drawer-label" class=" flex-wrap items-center ">
        <InfoCircleSolid class="me-2.5 h-5 w-5" />
      </h5>
	
  </Drawerhead>
   <ProfileNav/>
</Drawer>