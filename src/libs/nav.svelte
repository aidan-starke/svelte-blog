<script>
	import ThemeSelect from "@/libs/theme-select.svelte";
	export let pages = [];
</script>

<div class="navbar bg-base-100 bg-base-300 mb-10 shadow-lg">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home</a></li>
				{#each pages as { title, slug }}
					<li><a href={slug}>{title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost normal-case text-xl" href="/">Svelte Blog</a>
	</div>
	<div class="navbar-end">
		<ThemeSelect />
	</div>
</div>
