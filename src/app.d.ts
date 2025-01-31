// See https://kit.svelte.dev/docs/types#app

import type { StrapiApi } from '$lib/shared/api/strapi-api';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			strapiApi: StrapiApi;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
