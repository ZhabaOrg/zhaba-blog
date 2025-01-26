<script lang="ts">
	import { getArticleListUrl } from '$lib/shared/utils';

	export let name: string;
</script>

<div class="tag">
	<a href={getArticleListUrl(name)} class="tag-link">{name}</a>
</div>

<style>
	.tag {
		background: var(--contrast-text-color);
		color: var(--contrast-color);
		border-radius: var(--space);
	}

	.tag-link {
		padding: 0.25rem;
		display: block;
	}

	.tag:hover {
		opacity: 0.8;
		cursor: pointer;
	}
</style>
