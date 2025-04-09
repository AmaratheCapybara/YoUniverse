<script>
	import { login, register } from '$lib/api/auth';
	import { setUser } from '$lib/stores/auth';

	let username = '';
	let email = '';
	let password = '';
	let error = '';
	let isLogin = false; // default to register if coming from "Create an account" button

	async function handleSubmit() {
		error = '';
		try {
			const data = isLogin
				? await login({ username, password })
				: await register({ email, username, password });
			
			setUser(data);
			alert(`${isLogin ? 'Logged in' : 'Registered'} successfully`);
		} catch (err) {
			error = err.message;
		}
	}
</script>

<h1 class="text-xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h1>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
	{#if !isLogin}
		<div>
			<label class="block mb-1">Email</label>
			<input type="email" bind:value={email} class="w-full p-2 border rounded" />
		</div>
	{/if}

	<div>
		<label class="block mb-1">Username</label>
		<input bind:value={username} class="w-full p-2 border rounded" />
	</div>

	<div>
		<label class="block mb-1">Password</label>
		<input type="password" bind:value={password} class="w-full p-2 border rounded" />
	</div>

	<button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
		{isLogin ? 'Login' : 'Register'}
	</button>
</form>

<button on:click={() => isLogin = !isLogin} class="mt-4 text-sm text-blue-600 hover:underline">
	{isLogin ? 'Need an account?' : 'Already have an account?'}
</button>

{#if error}
	<p class="text-red-500 mt-2">{error}</p>
{/if}
