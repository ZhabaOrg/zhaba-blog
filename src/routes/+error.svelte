<script>
	import { page } from '$app/stores';

	import ZhabaImage from '$lib/assets/images/zhaba.jpeg?enhanced';
	import ZhabaWait from '$lib/assets/images/zhaba-wait.jpg?enhanced';
</script>

<div class="wrapper">
	<div class="container">
		<span class="status-code">{$page.status}</span>
		{#if $page.status === 404}
			<enhanced:img src={ZhabaImage} alt="Заблудившайся жаба" class="zhaba-image" />
			<span>Вы выглядите, как заблудившайся жаба</span>
		{:else}
			<enhanced:img src={ZhabaWait} alt="Заблудившайся жаба" class="zhaba-image" />
			<span>Жаба устала и отдыхает :(</span>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 20px;

		font-size: 30px;

		transform: translateY(-50px);
		height: fit-content;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.status-code {
		font-size: 4rem;
		color: var(--brand-color);
		font-weight: bold;
		line-height: 4rem;
		display: block;
	}

	.zhaba-image {
		max-width: calc(100% - var(--space) * 10);
		width: 600px;
		height: auto;
	}
</style>
