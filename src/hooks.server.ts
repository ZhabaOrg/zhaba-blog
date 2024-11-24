import { StrapiApi } from '$lib/shared/api/strapi-api';

export async function handle({ event, resolve }) {
	const api = new StrapiApi({
		apiToken: process.env.STRAPI_API_TOKEN ?? '',
		baseUrl: 'http://localhost:1337'
	});

	event.locals.strapiApi = api;

	return resolve(event);
}
