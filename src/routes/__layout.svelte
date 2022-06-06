<script context="module" lang="ts">
	import type {LoadParams, Pages} from "@/libs/types";

	export const load = async ({ fetch }: LoadParams) => {
		const res = await fetch("/pages.json");

		if (res.ok) {
			const { pages } = await res.json() as { pages: Pages};

			return {
				props: { pages },
			};
		}
	};
</script>

<script lang="ts">
	import "../app.css";
	import Nav from "@/libs/nav.svelte";
	import { onMount } from "svelte";
	import { themeChange } from "theme-change";
	import "../app.css";
	onMount(() => {
		themeChange(false);
	});

	export let pages: Pages;
</script>

<Nav {pages} />

<main class="container max-w-xl mx-auto px-4">
	<slot />
</main>
