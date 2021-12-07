<script>
	import { getContext } from 'svelte';
	import { ITEMS } from './MenuItems.svelte';

	const item = {};
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(item);
</script>


<button class="list-group-item" class:active="{$selectedItem === item}" on:click="{() => selectItem(item)}">
	<slot></slot>
</button>

<style>
	.list-group-item.active {
		background: #2D2D2D;
		border-color: #2D2D2D;
	}

</style>