<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import {
        Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Checkbox } from 'svelte-5-ui-lib';
	const headItems = ['Brand', 'Name', 'Color', 'Type', 'Price'];
	const bodyItems = [
		['Apple', 'MacBook Pro 17"', 'Sliver', 'Laptop', '$2999'],
		['Microsoft', 'Surface Pro', 'White', 'Laptop PC', '$1999'],
		['Apple', 'Magic Mouse 2', 'Black', 'Accessories', '$99'],
		['Google', ' Pixel Phone', 'Gray', 'Phone', '$799'],
		['Apple', 'Watch 5', 'Red', 'Wearables', '$999']
	];

</script>
<Table hoverable={true} class= "m-4 h-100% ">
	<TableHead>
		<TableHeadCell class="!p-4">
			<Checkbox />
		</TableHeadCell>
		<TableHeadCell>Product name</TableHeadCell>
		<TableHeadCell>Color</TableHeadCell>
		<TableHeadCell>Category</TableHeadCell>
		<TableHeadCell>Price</TableHeadCell>
		<TableHeadCell>
			<span class="sr-only">Edit</span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		<TableBodyRow>
			<TableBodyCell class="!p-4">
				<Checkbox />
			</TableBodyCell>
			<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
			<TableBodyCell>Sliver</TableBodyCell>
			<TableBodyCell>Laptop</TableBodyCell>
			<TableBodyCell>$2999</TableBodyCell>
			<TableBodyCell>
				<a
					href="/components/table"
					class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell class="!p-4">
				<Checkbox />
			</TableBodyCell>
			<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
			<TableBodyCell>White</TableBodyCell>
			<TableBodyCell>Laptop PC</TableBodyCell>
			<TableBodyCell>$1999</TableBodyCell>
			<TableBodyCell>
				<a
					href="/components/table"
					class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell class="!p-4">
				<Checkbox />
			</TableBodyCell>
			<TableBodyCell>Magic Mouse 2</TableBodyCell>
			<TableBodyCell>Black</TableBodyCell>
			<TableBodyCell>Accessories</TableBodyCell>
			<TableBodyCell>$99</TableBodyCell>
			<TableBodyCell>
				<a
					href="/components/table"
					class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>