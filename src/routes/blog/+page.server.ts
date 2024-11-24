import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const articles = await event.locals.strapiApi.getArticles();

	return {
		articles
	};
};
