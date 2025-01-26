<script lang="ts">
	import 'highlight.js/styles/github.css';

	export let text: string;
</script>

<div class="markdown">
	{@html text}
</div>

<style lang="scss">
	.markdown {
		line-height: 1.7;

		:global(p) {
			margin-bottom: 1rem;
		}
		:global(h1) {
			color: var(--brand-text-color);
			font-size: var(--h1-font-size);
		}

		:global(h2) {
			font-size: var(--h2-font-size);
		}
		:global(h3) {
			font-size: var(--h3-font-size);
		}
		:global(h4) {
			font-size: var(--h4-font-size);
		}
		:global(h5) {
			font-size: var(--h5-font-size);
		}
		:global(h6) {
			font-size: var(--h6-font-size);
		}

		:global(blockquote) {
			padding-left: 8px;
			position: relative;

			&::before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;

				width: 2px;
				background: var(--brand-outline-color);
			}
		}

		:global(pre) {
			background: var(--secondary-color);
			padding: 10px;

			:global(code) {
				background: inherit;
			}
		}

		:global(code) {
			background: var(--contrast-text-color);
			padding: 4px;
		}

		:global(a) {
			color: #a824f9;
		}

		:global(strong) {
			font-weight: bold;
		}

		:global(em) {
			font-style: italic;
		}

		:global(ul) {
			:global(li) {
				padding-left: 12px;
				position: relative;
				display: block;

				&::before {
					content: '>';

					position: absolute;
					left: 0;

					color: var(--brand-outline-color);
					font-weight: bold;
				}
			}
		}

		:global(ol) {
			list-style-type: decimal;
			list-style-position: inside;
		}

		:global(table) {
			border: 1px solid var(--table-border-color);
			padding: var(--small-padding);
			border-collapse: collapse;

			:global(th),
			:global(td) {
				border: 1px solid var(--table-border-color);
				padding: 0 calc(var(--space) * 4);
			}

			:global(thead) {
				background: var(--secondary-color);
				color: var(--brand-color);
			}
		}

		:global(img) {
			padding: 1.25rem;
			width: 500px;
			max-width: calc(100vw - 2 * var(--container-padding));
			margin-left: 50%;
			margin-right: calc(-50% - 1.25rem);
			transform: translateX(-50%);
		}
	}
</style>
