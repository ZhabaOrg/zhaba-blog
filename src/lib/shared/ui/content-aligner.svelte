<div class="wrapper">
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss">
	@import 'src/styles';

	.wrapper {
		display: flex;
		justify-content: center;
		padding: calc(var(--space) * 5);
	}

	.container {
		--container-padding: 20px;
		max-width: calc(100vw - 2 * var(--container-padding));

		width: 1200px;
	}

	@media screen and (max-width: map-get($breakpoints, 'large')) {
		.container {
			width: 800px;
		}
	}
</style>
