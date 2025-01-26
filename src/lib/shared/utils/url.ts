const getBlogUrl = (slug: string) => `/blog/${slug}`;

const getArticleListUrl = (tagFilter?: string) => {
	const baseUrl = `/blog`;
	if (!tagFilter) return baseUrl;

	const searchParams = new URLSearchParams();
	searchParams.set('tag', tagFilter);

	return `${baseUrl}?${searchParams.toString()}`;
};

export { getBlogUrl, getArticleListUrl };
