<script context="module" lang="ts">
	import type { LoadParams, Posts } from "@/libs/types";

	export const load = async ({ fetch }: LoadParams) => {
		const res = await fetch("/posts.json");
		if (res.ok) {
			const { posts } = await res.json() as { posts: Posts };
			return { props: { posts } };
		}
	};
</script>

<script lang="ts">
	export let posts: Posts;
</script>

<svelte:head>
	<title>Svelte Blog | Welcome</title>
</svelte:head>

{#each posts as { title, slug, excerpt, coverImage, tags }}
	<div class="card text-center shadow-2xl mb-20">
		<figure class="px-10 pt-10">
			<img
				class="rounded-xl"
				src={coverImage.url}
				alt={`Cover image for ${title}`}
			/>
		</figure>
		<div class="card-body">
			<h2 class="title">{title}</h2>
			<p>{excerpt}</p>
			<div class="flex justify-center mt-5 space-x-2">
				{#each tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
			<div class="justify-center card-actions">
				<a href={`/posts/${slug}`} class="btn btn-primary btn-outline"
					>Read &rArr;</a
				>
			</div>
		</div>
	</div>
{/each}
