import { StrapiApi } from '$lib/shared/api/strapi-api';
import { getConfig } from '$lib/config';

export async function handle({ event, resolve }) {
	const config = getConfig();

	const api = new StrapiApi({
		apiToken: config.strapi.apiToken,
		baseUrl: config.strapi.baseUrl
	});

	event.locals.strapiApi = api;

	return resolve(event);
}
