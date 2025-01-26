import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { excludePTagAsImageWrapper, getHtmlFromMarkdown } from '$lib/server/utils/html';

export const load: PageServerLoad = async (event) => {
	const slug = event.params.slug;

	const article = await event.locals.strapiApi.getArticleBySlug(slug);

	if (!article) {
		throw error(404, 'Not found');
	}

	return {
		article: {
			...article,
			content: excludePTagAsImageWrapper(getHtmlFromMarkdown(article.content))
		}
	};
};
