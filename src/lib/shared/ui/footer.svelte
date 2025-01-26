<script>
	import ContentAligner from './content-aligner.svelte';
</script>

<footer class="wrapper">
	<ContentAligner>
		<div class="container">2025 - Aleksandr Zhavoronkov</div>
	</ContentAligner>
</footer>

<style lang="scss">
	@import 'src/styles.scss';
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		border-top: 1px solid var(--brand-outline-color);
	}

	.container {
		text-align: end;
	}
</style>
