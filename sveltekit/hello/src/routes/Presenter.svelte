<script lang="ts">
	type User = {
		name: string;
	};
	let user: User = { name: '' };
</script>

Enter presenter name
<input type="text" name="ptr" id="ptr" bind:value={user.name} />
<div>Testing Presenter {user.name}</div>
