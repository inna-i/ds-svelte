<script>
    import Text from '../Typography/Text.svelte';
	import Title from '../Typography/Title.svelte';
	import SubTitle from '../Typography/SubTitle.svelte';

    const textSizes = [
		'small', 'medium', 'large', 'extra-large'
	];	
	const subTitleSizes = [
		'sub-h3', 'sub-h2', 'sub-h1'
	];
	const titleSizes = ['h3', 'h2', 'h1'];
</script>

<ul class="demo-list">
	{#each textSizes as size}
        <li>
            <Text size={size}>
                This text is <b>{size}</b>
            </Text>
        </li>
    {/each}		
    {#each subTitleSizes as size}
        <li>
            <SubTitle hSize={size}>
                This is sub-title size <b>{size}</b>
            </SubTitle>
        </li>
    {/each}
    {#each titleSizes as size}
        <li>
            <Title hSize={size}>
                This is title size <b>{size}</b>
            </Title>
        </li>
    {/each}
</ul>