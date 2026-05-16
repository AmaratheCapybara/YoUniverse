<script>
	import {
		Badge,
		Button,
		Checkbox,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let { data } = $props();
</script>

<section class="px-4 py-6">
	<Button class="m-4 bg-[#77B602]">Add New Member</Button>

	<Table hoverable={true} class="m-4">
		<TableHead>
			<TableHeadCell class="!p-4">
				<Checkbox />
			</TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Handle</TableHeadCell>
			<TableHeadCell>Subsystems</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only">Edit</span>
			</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each data.dummydata.Headmates as member}
				<TableBodyRow>
					<TableBodyCell class="!p-4">
						<Checkbox />
					</TableBodyCell>
					<TableBodyCell>{member.name}</TableBodyCell>
					<TableBodyCell>{member.handle}</TableBodyCell>
					<TableBodyCell>
						<div class="flex flex-wrap gap-2">
							{#each member.subsystems as system}
								<Badge>{system}</Badge>
							{/each}
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<a href={`/profile/${member.name}`} class="text-primary-600 dark:text-primary-500 font-medium hover:underline">
							Edit
						</a>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</section>
