<script>
	let {
		ProductID,
		Product = {
			name: "Donation",
			ProductID: ProductID,
		}
	} =$props()
	async function Donate(Product) {

	}
</script>
<div class="card">
<h1>{Product.name}</h1>
	<button onclick={Donate}>Donate Now</button>
</div>