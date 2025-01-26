<script lang="ts">
	import { page } from '$app/stores';
	import { TagList } from '$lib/entities/tag';
	import { getArticleListUrl } from '$lib/shared/utils';

	export let tags: string[];

	$: topTags = tags.slice(0, 5);

	$: isFilterExists = [...$page.url.searchParams.entries()].length !== 0;
</script>

<div class="wrapper">
	<TagList tags={topTags}>
		<span slot="name">Топ 5 тегов:</span>
	</TagList>
	{#if isFilterExists}
		<a href={getArticleListUrl()}>Сбросить фильтры</a>
	{/if}
</div>

<style lang="scss">
	@import 'src/styles';

	.wrapper {
		padding-bottom: calc(var(--space) * 5);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: map-get($breakpoints, 'small')) {
		.wrapper {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
