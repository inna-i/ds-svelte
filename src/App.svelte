<script>
	export let framework;
	import { MenuItems, MenuItemsList, MenuPanel, MenuItem } from './SideMenu';
	import Action from './Action/Action.svelte';
	import Colors from './Colors/Colors.svelte';
	import Typography from './storybook/Typography.svelte';
</script>

<main class="demo">
	<header>
		<h1>Design System built with {framework}</h1>
		<h3 class="demo-sub-title">Components library demo</h3>
	</header>

	<MenuItems>
		<MenuItemsList>
			<MenuItem>Color</MenuItem>
			<MenuItem>Typography</MenuItem>
			<MenuItem>Buttons and Links</MenuItem>
			<MenuItem>Tutorial Tips Modals</MenuItem>
		</MenuItemsList>

			
		<MenuPanel>
			<Colors />
		</MenuPanel>
		<MenuPanel>
			<Typography />
		</MenuPanel>

		<MenuPanel>
			<Action bsType="primary" label="Click me" />
		</MenuPanel>
	
		<MenuPanel>
			<h2>Modals</h2>
		</MenuPanel>
	</MenuItems>

</main>

<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

	* {
		padding: 0;
		margin: 0;
		font-family: sans-serif;
	}

	.demo {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0 auto;
	}

	.demo header {
		padding: 20px 0;
		margin-bottom: 15px;
		border-bottom: 14px solid #ccc;
		background: #333;
		color: white;
	}
	.demo h1 {
		padding: 30px 0 20px;
		color: white;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	.demo-sub-title {
		margin-bottom: 25px;
		color: #ccc;
		font-weight: 200;
		font-size: 1.2rem;
		font-style: italic;
		letter-spacing: 2px;
	}

	@media (min-width: 640px) {
		.demo {
			max-width: none;
		}
	}

</style>
