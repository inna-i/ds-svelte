<script>
	export let framework;
	import { Tabs, TabList, TabPanel, Tab } from './Tabs';
	import Text from './Typography/Text.svelte';
	import Title from './Typography/Title.svelte';
	import SubTitle from './Typography/SubTitle.svelte';
	import Action from './Action/Action.svelte';

	const textSizes = [
		'small', 'medium', 'large', 'extra-large'
	];	
	const subTitleSizes = [
		'sub-h3', 'sub-h2', 'sub-h1'
	];
	const titleSizes = ['h3', 'h2', 'h1'];
</script>

<main class="demo">
	<h1>Design System built with {framework}</h1>
	<h3 class="demo-sub-title">Components library demo</h3>


	<Tabs>
		<TabList>
			<Tab>Typography</Tab>
			<Tab>Color</Tab>
			<Tab>Buttons and Links</Tab>
			<Tab>Modals</Tab>
		</TabList>
	
		<TabPanel>
			<ul class="demo-list">
				{#each textSizes as size, i}
					<li>
						<Text size={size}>
							This text is <b>{size}</b>
						</Text>
					</li>
				{/each}		
				{#each subTitleSizes as size, i}
					<li>
						<SubTitle hSize={size}>
							This is sub-title size <b>{size}</b>
						</SubTitle>
					</li>
				{/each}
				{#each titleSizes as size, i}
					<li>
						<Title hSize={size}>
							This is title size <b>{size}</b>
						</Title>
					</li>
				{/each}
			</ul>
		</TabPanel>
	
		<TabPanel>
			Colors will be there
		</TabPanel>

		<TabPanel>
			<Action bsType="primary">Click me </Action>
		</TabPanel>
	
		<TabPanel>
			<h2>Modals</h2>
		</TabPanel>
	</Tabs>

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

	.demo h1 {
		padding: 30px 0 20px;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	.demo-sub-title {
		margin-bottom: 25px;
		color: gray;
		font-weight: 300;
		font-style: italic;
		letter-spacing: 2px;
	}

	@media (min-width: 640px) {
		.demo {
			max-width: none;
		}
	}

	.demo-list, .demo-list li {
		list-style-type: none;
	}

	.demo-list li {
		border-bottom: 1px solid silver;
	}

</style>
