<script type="ts">
	import '../reset.css';
	import '../styles.scss';

	import { Header, Footer } from '$lib/shared/ui';
</script>

<div class="wrapper" id="root">
	<Header />
	<slot />
	<Footer />
</div>

<style lang="scss">
	@import 'src/styles';

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

		font-family: var(--default-font);

		line-height: 1.3rem;
	}

	:global(html) {
		font-size: var(--initial-font-size);

		@media screen and (max-width: map-get($breakpoints, 'small')) {
			font-size: var(--small-screen-size-font-size);
		}
	}
</style>
