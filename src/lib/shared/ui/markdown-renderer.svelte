<script lang="ts">
	import { Remarkable } from 'remarkable';
	import hljs from 'highlight.js'; // https://highlightjs.org/
	import 'highlight.js/styles/github.css';

	export let text: string;

	// Actual default values
	const md = new Remarkable({
		typographer: true,
		highlight: function (str, lang) {
			console.log('lang', lang);
			if (lang && hljs.getLanguage(lang)) {
				try {
					const val = hljs.highlight(lang, str).value;
					console.log('val', val);
					return val;
				} catch (err) {}
			}

			try {
				return hljs.highlightAuto(str).value;
			} catch (err) {}

			return ''; // use external default escaping
		}
	});
</script>

<div class="markdown">
	{@html md.render(text)}
</div>

<style lang="scss">
	.markdown {
		line-height: 2;
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
			background: black;
			padding: 10px;

			:global(code) {
				background: inherit;
			}
		}

		:global(code) {
			background: #596af4;
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

			:global(li)::marker {
				display: none;
			}
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
				background: black;
				color: var(--brand-color);
			}
		}

		:global(img) {
			padding: calc(var(--space) * 5);
			width: 500px;
			margin-left: 50%;
			transform: translateX(-50%);
			/* margin: 0 auto; */
		}
	}
</style>
