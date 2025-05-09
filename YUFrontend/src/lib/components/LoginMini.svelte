<script>
	import { login } from '$lib/api/auth';
	import { setUser } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let error = '';

	async function handleLogin() {
		error = '';
		try {
			const data = await login({ username, password });
			setUser(data);
			alert('Logged in successfully');
		} catch (err) {
			error = err.message;
		}
	}

	function goToRegister() {
		goto('/auth');
	};
</script>

<div class="p-2 w-64">
	<p class="font-semibold mb-2">Login</p>
	<input placeholder="Username" bind:value={username} class="w-full mb-2 p-1 border rounded" />
	<input placeholder="Password" type="password" bind:value={password} class="w-full mb-2 p-1 border rounded" />
	<button on:click={handleLogin} class="bg-[#77B602] text-white px-3 py-1 rounded w-full mb-2">
		Log In
	</button>

	<button on:click={goToRegister} class="text-sm text-[#77B602] hover:underline w-full">
		Create an account
	</button>

	{#if error}
		<p class="text-red-500 text-sm mt-1">{error}</p>
	{/if}
</div>
