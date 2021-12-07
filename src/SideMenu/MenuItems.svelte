<script context="module">
	export const ITEMS = {};
</script>

<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const items = [];
	const panels = [];
	const selectedItem = writable(null);
	const selectedPanel = writable(null);

	setContext(ITEMS, {
		registerItem: item => {
			items.push(item);
			selectedItem.update(current => current || item);
			
			onDestroy(() => {
				const i = items.indexOf(item);
				items.splice(i, 1);
				selectedItem.update(current => current === item ? (items[i] || items[items.length - 1]) : current);
			});
		},

		registerPanel: panel => {
			panels.push(panel);
			selectedPanel.update(current => current || panel);
			
			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);
				selectedPanel.update(current => current === panel ? (panels[i] || panels[panels.length - 1]) : current);
			});
		},

		selectItem: item => {
			const i = items.indexOf(item);
			selectedItem.set(item);
			selectedPanel.set(panels[i]);
		},

		selectedItem,
		selectedPanel
	});
</script>

<div class="menu-items">
	<slot></slot>
</div>

<style>
	.menu-items {
		display: flex;
		flex-direction: row;
	}
</style>