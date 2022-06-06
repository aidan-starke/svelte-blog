<script context="module" lang="ts">
	import type { LoadParams, Post } from "@/libs/types";

	export const load = async ({ fetch, params: { slug } }: LoadParams) => {
		const res = await fetch(`/posts/${slug}.json`);
		if (res.ok) {
			const { post } = (await res.json()) as { post: Post };
			return { props: { post } };
		}
	};
</script>

<script lang="ts">
	export let post = {} as Post;

	const {
		title,
		date,
		tags,
		author: { name, authorTitle, picture },
		content: { html },
		coverImage,
	} = post;
</script>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
	<img src={coverImage.url} alt={`Cover image for ${title}`} class="" />
</div>

<h1 class="text-4xl font-semibold mb-5">{title}</h1>

<a href="/" class="inline-flex items-center mb-3">
	<img
		src={picture.url}
		alt={name}
		class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
	/>
	<span class="flex-grow flex flex-col pl-4">
		<span class="title-font font-medium>">{name}</span>
		<span class="text-secondary text-xs tracking-widest mt-0.5"
			>{authorTitle}</span
		>
	</span>
</a>

<p class="text-secondary text-xs tracking-widers font-semibold">
	{new Date(date).toLocaleDateString()}
</p>

{#if tags.length}
	<div class="mb-5 flex justify-between">
		{#each tags as tag}
			<span class="badge badge-primary">{tag}</span>
		{/each}
	</div>
{/if}

<article class="prose">
	{@html html}
</article>
