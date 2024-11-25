<footer class="wrapper">
	<div class="container">2024 - Aleksandr Zhavoronkov</div>
</footer>

<style lang="scss">
	@import 'src/styles.scss';
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		height: calc(var(--space) * 10);

		border-top: 1px solid var(--brand-outline-color);
	}

	.container {
		padding-right: 200px;
	}
	@media screen and (max-width: map-get($breakpoints, 'small')) {
		.container {
			padding: 0;
		}

		.wrapper {
			justify-content: center;
		}
	}
</style>
