<script lang="ts">
	import MarkdownRenderer from '$lib/shared/ui/markdown-renderer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1>{data.article.title}</h1>
	<MarkdownRenderer text={data.article.content} />
</div>
