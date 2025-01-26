<script lang="ts">
	import { ArticlePreview } from '$lib/entities/article';
	import type { ShortArticlePreview } from '$lib/entities/article';
	import { TagList } from '$lib/entities/tag';

	export let articlePreviews: ShortArticlePreview[];
</script>

<section class="list">
	{#each articlePreviews as articlePreview}
		<div class="wrapper">
			<ArticlePreview article={articlePreview}>
				<TagList slot="meta" tags={articlePreview.tags?.map(({ name }) => name) ?? []} />
			</ArticlePreview>
		</div>
	{/each}
</section>

<style>
	.list {
		--gap: 1rem;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}

	.wrapper:not(:last-child) {
		padding-bottom: var(--gap);
		border-bottom: 1px solid var(--quite-outline-color);
	}
</style>
