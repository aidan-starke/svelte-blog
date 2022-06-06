<script context="module" lang="ts">
	import type {LoadParams, Page} from "@/libs/types";

	export const load = async ({ fetch, params: { slug } }: LoadParams) => {
		const res = await fetch(`/pages/${slug}.json`);
		if (res.ok) {
			const { page } = await res.json() as { page: Page };
			return { props: { page } };
		}
	};
</script>

<script lang="ts">
	export let page: Page;
</script>

<svelte:head>
	<title>Svelte Blog | {page.title}</title>
</svelte:head>

<h1 class="text-4xl font-semibold mb-5">{page.title}</h1>

<article class="prose">
	{@html page.content.html}
</article>
