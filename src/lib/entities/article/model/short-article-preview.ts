export interface ShortArticlePreview {
	createdAt: string;
	title: string;
	description: string;
	// likeCount: number;
	slug: string;
	content: string;
	type: 'kvak' | 'complete';
	tags: { name: string }[];
}
