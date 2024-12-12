export const excludePTagAsImageWrapper = (inputHtml: string) => {
	const el = document.createElement('div');
	el.innerHTML = inputHtml;

	const allPTags = el.querySelectorAll('p');
	allPTags.forEach((elem) => {
		if (
			elem.innerText === '' &&
			elem.childNodes.length === 1 &&
			(elem.childNodes[0] as HTMLImageElement)?.tagName === 'IMG'
		) {
			elem.parentNode?.insertBefore(elem.childNodes[0], elem);
			elem.remove();
		}
	});

	return el.innerHTML;
};
