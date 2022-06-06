<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch("/pages.json");

		if (res.ok) {
			const { pages } = await res.json();

			return {
				props: { pages },
			};
		}
	};
</script>

<script>
	import "../app.css";
	import Nav from "@/libs/nav.svelte";
	import { onMount } from "svelte";
	import { themeChange } from "theme-change";
	import "../app.css";
	onMount(() => {
		themeChange(false);
	});

	export let pages;
</script>

<Nav {pages} />

<main class="container max-w-xl mx-auto px-4">
	<slot />
</main>
