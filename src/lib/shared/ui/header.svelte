<script lang="ts">
	import { page } from '$app/stores';

	interface NavigationItem {
		url: string;
		name: string;
		pattern: RegExp;
	}

	const navigationSettings: NavigationItem[] = [
		{
			url: '/blog',
			name: 'Записи',
			pattern: /blog/
		}
	];
</script>

<header class="header">
	<div class="blog-name">
		<a href="/blog"> Zhaba.Blog </a>
	</div>
	<nav class="menu">
		{#each navigationSettings as { url, name, pattern } (url)}
			<li>
				<a href={url} class:menu-item-active={pattern.test($page.url.pathname)}>{name}</a>
			</li>
		{/each}
	</nav>
	<div></div>
</header>

<style lang="scss">
	@import 'src/styles';

	.header {
		--padding-side: 40px;

		background: #151d27;
		width: calc(100% - var(--padding-side) * 2);
		height: 50px;
		padding: 0 var(--padding-side);

		display: grid;
		align-items: center;
		grid-template-columns: 1fr auto 1fr;

		color: var(--brand-text-color);

		font-size: var(--header-title-font-size);
		font-family: var(--contrast-font);
	}

	@media (max-width: map-get($breakpoints, 'small')) {
		.header {
			--padding-side: 20px;
			grid-template-columns: 1fr auto 0;
		}
	}

	.blog-name {
		outline: none;
		color: inherit;
		text-decoration: none;
		display: block;
	}

	.menu {
		display: flex;
		gap: 20px;
		align-items: center;

		font-family: var(--default-font);
		font-size: 1.2rem;
		color: var(--contrast-color);
	}

	.menu-item-active {
		color: var(--brand-color);
		text-decoration: underline;
	}
</style>
