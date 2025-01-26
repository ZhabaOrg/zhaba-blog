import axios from 'axios';

interface StrapiApiOptions {
	apiToken: string;
	baseUrl: string;
}

class StrapiApi {
	#baseUrl: string;
	constructor({ baseUrl, apiToken }: StrapiApiOptions) {
		this.#baseUrl = baseUrl;

		axios.interceptors.request.use((config) => {
			config.headers.set('Authorization', `Bearer ${apiToken}`);
			config.baseURL = this.#baseUrl;
			return config;
		});
	}

	public async getArticles(tagFilter?: string | null) {
		const { data } = await axios.get<{ data: any[] }>(
			`/api/articles${tagFilter ? `?filters[tags][$contains]=${tagFilter}` : ''}`
		);
		return data.data;
	}

	public async getArticleBySlug(slug: string) {
		const { data } = await axios.get(`/api/articles?filters[slug][$eq]=${slug}`);
		return data.data[0];
	}

	/**
	 * i guess it's not best way to get tags :)
	 */
	public async getTagList(): Promise<string[]> {
		const articles = await this.getArticles();

		const tagUsageMap = articles
			.flatMap((article) => article.tags ?? [])
			.reduce((acc, { name: tag }) => {
				if (!acc[tag]) {
					acc[tag] = 0;
				}
				acc[tag]++;

				return acc;
			}, {});
		const tagList = Array.from(
			new Set(articles.flatMap((article) => article.tags?.map(({ name }) => name) ?? []))
		);
		const sortedTagList = tagList.toSorted((tagA, tagB) => tagUsageMap[tagB] - tagUsageMap[tagA]);

		return sortedTagList;
	}
}

export { StrapiApi };
