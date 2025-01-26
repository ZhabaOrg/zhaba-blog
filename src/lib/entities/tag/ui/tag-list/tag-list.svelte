<script lang="ts">
	import Tag from '../tag/tag.svelte';

	export let tags: string[];
</script>

<div class="tag-wrapper">
	<slot name="name">
		<span>Теги:</span>
	</slot>
	<div class="tag-list">
		{#each tags as name (name)}
			<Tag {name} />
		{/each}
	</div>
</div>

<style>
	.tag-wrapper {
		display: flex;
		align-items: center;
		gap: calc(var(--space) * 2);
		flex-wrap: wrap;
	}

	.tag-list {
		display: flex;
		gap: 4px;
	}
</style>
