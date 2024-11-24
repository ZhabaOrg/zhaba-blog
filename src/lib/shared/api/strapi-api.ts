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
			return config;
		});
	}

	public async getArticles() {
		const { data } = await axios.get('http://localhost:1337/api/articles');
		return data.data;
	}

	public async getArticleBySlug(slug: string) {
		const { data } = await axios.get(
			`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}`
		);
		return data.data[0];
	}
}

export { StrapiApi };
