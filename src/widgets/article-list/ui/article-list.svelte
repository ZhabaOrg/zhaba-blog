<script lang="ts">
	import { ArticlePreview } from '$lib/entities/article';
	import type { ShortArticlePreview } from '$lib/entities/article';

	export let articlePreviews: ShortArticlePreview[];
</script>

<section class="list">
	{#each articlePreviews as articlePreview}
		<div class="wrapper">
			<ArticlePreview article={articlePreview} href="./rofln" />
		</div>
	{/each}
</section>

<style>
	.list {
		--gap: 20px;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}

	.wrapper:not(:last-child) {
		padding-bottom: var(--gap);
		border-bottom: 1px solid var(--quite-outline-color);
	}
</style>
