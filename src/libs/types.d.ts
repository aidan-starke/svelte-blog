export interface Post {
	title: string;
	date: string;
	tags: string[];
	author: { name: string; authorTitle: string; picture: { url: string } };
	content: { html: HTMLCollection };
	coverImage: {
		url: string;
	};
}

export type Posts = Array[Post];

export interface LoadParams {
	fetch: (url: string) => Promise<Response>;
	params: Record<string, string>
}

export interface Page {
	title: string;
	slug: string;
	content: { html: HTMLCollection };
}

export type Pages = Page[];
