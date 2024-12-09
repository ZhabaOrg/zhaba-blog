import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const slug = event.params.slug;

	const article = await event.locals.strapiApi.getArticleBySlug(slug);

	if (!article) {
		throw error(404, 'Not found');
	}

	return {
		article
	};
};
