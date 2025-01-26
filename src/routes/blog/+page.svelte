<script lang="ts">
	import { ArticleFilters } from '$lib/widgets/article-filters';
	import { ArticleList } from '$lib/widgets/article-list';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Статьи — Zhaba.blog</title>
</svelte:head>

<main>
	<ArticleFilters tags={data.tags} />
	<ArticleList articlePreviews={data.articles} />
</main>
