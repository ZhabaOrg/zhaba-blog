import hljs from 'highlight.js'; // https://highlightjs.org/
import jsDom from 'jsdom';
import { Remarkable } from 'remarkable';
import 'highlight.js/styles/github.css';

const md = new Remarkable('full', {
	typographer: true,
	breaks: true,
	html: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				const val = hljs.highlight(lang, str).value;
				return val;
			} catch (err) {}
		}

		try {
			return hljs.highlightAuto(str).value;
		} catch (err) {}

		return ''; // use external default escaping
	}
});

const getHtmlFromMarkdown = (markdown: string) => {
	return md.render(markdown);
};

const excludePTagAsImageWrapper = (inputHtml: string) => {
	const dom = new jsDom.JSDOM(inputHtml);

	const allPTags = dom.window.document.body.querySelectorAll('p');

	allPTags.forEach((elem) => {
		if (
			elem.innerText === undefined &&
			elem.childNodes.length === 1 &&
			(elem.childNodes[0] as HTMLImageElement)?.tagName === 'IMG'
		) {
			elem.parentNode?.insertBefore(elem.childNodes[0], elem);
			elem.remove();
		}
	});

	return dom.window.document.body.innerHTML;
};

export { getHtmlFromMarkdown, excludePTagAsImageWrapper };
