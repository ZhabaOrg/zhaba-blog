<script>
	import { Header, Footer } from '$lib/shared/ui';
</script>

<Header />
<div class="wrapper">
	<div class="container">
		<slot />
	</div>
</div>
<Footer />

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		padding: calc(var(--space) * 5);
	}

	.container {
		--container-padding: 20px;
		max-width: calc(100vw - 2 * var(--container-padding));
		width: 800px;
	}
</style>
