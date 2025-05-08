<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import {
        Button,
        Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Checkbox, 
		Avatar,
		Badge} from 'svelte-5-ui-lib';
	const headItems = ['Brand', 'Name', 'Color', 'Type', 'Price'];
	const bodyItems = [
		['Apple', 'MacBook Pro 17"', 'Sliver', 'Laptop', '$2999'],
		['Microsoft', 'Surface Pro', 'White', 'Laptop PC', '$1999'],
		['Apple', 'Magic Mouse 2', 'Black', 'Accessories', '$99'],
		['Google', ' Pixel Phone', 'Gray', 'Phone', '$799'],
		['Apple', 'Watch 5', 'Red', 'Wearables', '$999']
	];
let {Headmates} = $state([]);
let {headmateslist} =$state([]);
</script>

<Button class="bbg- [#77B602] m-4"> Add New Member</Button>
<Table hoverable={true} class= "m-4 h-100% ">
	<TableHead>
		<TableHeadCell class="!p-4">
			<Checkbox  />
		</TableHeadCell>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Handle</TableHeadCell>
		<TableHeadCell>Subsystems</TableHeadCell>
		
		<TableHeadCell>
			<span class="sr-only">Edit</span>
		</TableHeadCell>
	</TableHead><TableBody>
    {#await data}
    <TableBodyRow>no members listed
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
       </TableBodyRow>
    {:then} 
    {#each data.dummydata.Headmates as member}
<TableBodyRow>
    <TableBodyCell class="!p-4">
        <Checkbox />
    </TableBodyCell>
    <TableBodyCell>{member.name}</TableBodyCell>
    <TableBodyCell>{member.handle}</TableBodyCell>
    <TableBodyCell>
		{#each subsystems as system}
			<Badge>
		{member.system}
			</Badge>
		{/each}
</TableBodyCell>
    
    <TableBodyCell>
        <a
            href="/components/table"
            class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a
        >
    </TableBodyCell>
    
</TableBodyRow>
{/each}
      
    {/await}
   
   
   
  

</TableBody>

</Table>