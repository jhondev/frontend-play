<script lang="ts">
	import '../app.postcss';
	export let data: App.Locals;
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Showcase</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-primary">Register</a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/projects/new" class="btn btn-primary btn-outline">Add Project</a>
				</div>
				<div class="dropdown dropdown-end">
					<label for="" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" alt="user avatar" />
						</div>
					</label>
				</div>
			{/if}
		</div>
	</nav>
	<slot />
</div>
