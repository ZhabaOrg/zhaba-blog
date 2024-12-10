const getConfig = () => ({
	strapi: {
		apiToken: process.env.STRAPI_API_TOKEN ?? '',
		baseUrl: process.env.STRAPI_BASE_URL ?? 'http://localhost:1337'
	}
});

export { getConfig };
