<script lang="ts">
	import { Date } from '$lib/shared/ui';
	import MarkdownRenderer from '$lib/shared/ui/markdown-renderer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.article.title} - Zhaba.Blog</title>
</svelte:head>

<div>
	<h1 class="title">{data.article.title}</h1>
	<MarkdownRenderer text={data.article.content} />
	<div class="date">
		<span id="article-date">Дата публикации: <Date date={data.article.createdAt} /></span>
		{#if data.article.updatedAt && data.article.updatedAt !== data.article.createdAt}
			<span>Дата обновления: <Date date={data.article.updatedAt} /></span>
		{/if}
	</div>
</div>

<style>
	.title {
		font-size: 2.5rem;
		line-height: 120%;
		margin-bottom: calc(var(--space) * 10);
		display: block;
		font-weight: bold;

		position: relative;
	}

	.date {
		margin-top: calc(var(--space) * 10);
		display: block;
		text-align: end;
		font-size: 0.9rem;

		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.title::before {
		content: '';
		position: absolute;
		width: 4px;
		height: 100%;
		left: -10px;
		background: var(--brand-text-color);
	}
</style>
