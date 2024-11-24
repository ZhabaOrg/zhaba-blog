<script lang="ts">
	import { getBlogUrl } from '$lib/shared/utils/url';
	import type { ShortArticlePreview } from '../../model/short-article-preview';

	import { format } from 'date-fns';
	import { ru as localeRu } from 'date-fns/locale/ru';

	export let article: ShortArticlePreview;

	console.log('article.createdAt', article.createdAt);

	$: date = format(new Date(article.createdAt), 'MM/dd/yyyy в HH:mm:ss', {
		locale: localeRu
	});
</script>

<article class="container">
	<h2 class="title">
		<a href={getBlogUrl(article.slug)}>{article.title} </a>
	</h2>
	<summary>
		{article.description}
	</summary>
	<div class="meta">
		<span>Статья опубликована: {date}</span>
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
		content: '> ';
	}
</style>
