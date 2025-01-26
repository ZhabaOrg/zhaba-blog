import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const tagFilter = event.url.searchParams.get('tag');
	const articles = await event.locals.strapiApi.getArticles(tagFilter);

	const tags = await event.locals.strapiApi.getTagList();

	return {
		articles,
		tags
	};
};
