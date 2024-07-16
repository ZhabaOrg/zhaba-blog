import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	return {
		blogId: event.params.id
	};
};
