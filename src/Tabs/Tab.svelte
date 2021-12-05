<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
		padding: 10px 20px;
		background: none;
		border: none;
		border-bottom: 2px solid white;
		border-radius: 0;
		margin: 0;
		color: #888;
		cursor: pointer;
	}
	
	.selected {
		border-bottom: 2px solid #ef4e17;
		border-radius: 5px 5px 0 0;
		color: #fff;
		background: #ef4e17;
		font-size: 16px;
		font-weight: 600;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>