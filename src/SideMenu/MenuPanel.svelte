<script>
	import { getContext } from 'svelte';
	import { ITEMS } from './MenuItems.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(ITEMS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<div class="menu-item-panel">
		<slot></slot>
	</div>
{/if}

<style>
	.menu-item-panel {
		margin: 0 10px;
		padding: 30px 20px;
    	flex-grow: 1;
		border: 1px dashed #ccc;
	}
</style>