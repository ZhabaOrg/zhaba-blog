import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const slug = event.params.slug;

	const article = await event.locals.strapiApi.getArticleBySlug(slug);

	return {
		article
	};
};
