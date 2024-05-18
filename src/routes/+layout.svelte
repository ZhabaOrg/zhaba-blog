<script type="ts">
	import '../reset.css';
	import '../styles.css';
</script>

<div class="wrapper" id="root">
	<slot />
</div>

<style lang="scss">
	.wrapper {
		margin: 0;
		padding: 0;

		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 1fr;
		min-height: 100vh;
		width: 100%;

		background: var(--surface-color);
		color: var(--contrast-color);

		font-family: 'Ubuntu Sans';

		line-height: 1.3rem;
	}

	:global(html) {
		font-size: var(--initial-font-size);

		@media screen and (max-width: 800px) {
			font-size: var(--medium-screen-size-font-size);
		}
	}
</style>
