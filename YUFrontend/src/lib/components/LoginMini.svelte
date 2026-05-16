<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<form method="post" action="/auth?/login" use:enhance class="w-64 p-3">
	<input type="hidden" name="redirectTo" value="/headmateslist" />

	<label for="mini-username" class="mb-1 block font-semibold text-black">Username</label>
	<input
		id="mini-username"
		name="username"
		required
		class="mb-2 w-full rounded border p-2 text-black"
	/>

	<label for="mini-password" class="mb-1 block font-semibold text-black">Password</label>
	<input
		id="mini-password"
		name="password"
		type="password"
		required
		class="mb-3 w-full rounded border p-2 text-black"
	/>

	<button type="submit" class="mb-2 w-full">Log In</button>

	<button type="button" class="w-full text-sm" onclick={() => goto('/auth')}>
		Create an account
	</button>
</form>
