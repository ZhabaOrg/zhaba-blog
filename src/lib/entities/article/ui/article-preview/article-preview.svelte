<script lang="ts">
	import { Date } from '$lib/shared/ui';
	import { getBlogUrl } from '$lib/shared/utils/url';
	import type { ShortArticlePreview } from '../../model/short-article-preview';

	export let article: ShortArticlePreview;
</script>

<article class="container">
	<div class="title-container">
		<h2 class="title" class:title-kvak={article.type === 'kvak'}>
			{#if article.type === 'kvak'}
				<span class="kvak">#kvak</span>
			{/if}
			<a href={getBlogUrl(article.slug)}>{article.title}</a>
		</h2>
		<Date date={article.createdAt} includeTime={false} />
	</div>
	{#if article.description}
		<summary>
			{article.description}
		</summary>
	{/if}
	<div class="meta">
		<span>Теги:</span>
	</div>
</article>

<style>
	.container {
		/* background: white; */
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.title-container {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 20px;
	}

	.kvak {
		color: #82bb85;
	}

	.title {
		font-size: 1.3rem;
		color: var(--brand-text-color);
		font-weight: bold;
	}

	.meta {
		display: flex;
		flex-direction: column;
	}

	.title::before {
		content: '>';
	}

	.title-kvak::before {
		color: #82bb85;
	}
</style>
