<script>
	import { enhance } from '$app/forms';

	let { data, form } = $props();

	let mode = $state('login');
	let values = $derived(form?.values ?? {});

	$effect(() => {
		if (form?.mode) mode = form.mode;
	});
</script>

<section class="mx-auto flex max-w-lg flex-col gap-4 px-4">
	<div class="card">
		<h1 class="text-[#FF6F61]">Registration is open for alpha testers only at this moment</h1>
	</div>

	<div class="card">
		<h2 class="mb-4 text-center text-3xl">{mode === 'login' ? 'Login' : 'Register'}</h2>

		<form method="post" action={mode === 'login' ? '?/login' : '?/register'} use:enhance class="space-y-4">
			<input type="hidden" name="redirectTo" value={data.redirectTo} />

			{#if mode === 'register'}
				<div>
					<label for="email" class="mb-1 block">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						value={values.email ?? ''}
						required
						class="w-full rounded border p-2 text-black"
					/>
				</div>
			{/if}

			<div>
				<label for="username" class="mb-1 block">Username</label>
				<input
					id="username"
					name="username"
					value={values.username ?? ''}
					required
					class="w-full rounded border p-2 text-black"
				/>
			</div>

			<div>
				<label for="password" class="mb-1 block">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					class="w-full rounded border p-2 text-black"
				/>
			</div>

			<button type="submit" class="w-full">
				{mode === 'login' ? 'Login' : 'Register'}
			</button>
		</form>

		<button
			type="button"
			class="mt-4 w-full text-sm"
			onclick={() => (mode = mode === 'login' ? 'register' : 'login')}
		>
			{mode === 'login' ? 'Need an account?' : 'Already have an account?'}
		</button>

		{#if form?.message}
			<p class="mt-3 text-center text-[#FF6F61]">{form.message}</p>
		{/if}
	</div>
</section>
